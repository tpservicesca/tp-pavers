#!/usr/bin/env bash
# Uploads a package made by empacar.sh to the Hostinger Agency site and imports it.
# Usage: HOSTINGER_API_TOKEN=... h5g/publicar.sh <paquete.tar.gz> [website_uid]
set -euo pipefail
PKG="$1"; UID_SITE="${2:-Dio9jqqwN}"
API="https://developers.hostinger.com/api/agency-hosting/v1/websites/$UID_SITE"
AUTH=(-H "Authorization: Bearer $HOSTINGER_API_TOKEN" -H "Content-Type: application/json" -H "Accept: application/json")
NAME="publicar-$(date -u +%Y%m%d%H%M%S).tar.gz"
SIZE=$(stat -c%s "$PKG")

J=$(curl -fsS -X POST "${AUTH[@]}" "$API/files/upload-urls")
URL=$(printf '%s' "$J" | python3 -c 'import json,sys;print(json.load(sys.stdin)["url"])')
XA=$(printf '%s' "$J" | python3 -c 'import json,sys;print(json.load(sys.stdin)["auth_key"])')
XR=$(printf '%s' "$J" | python3 -c 'import json,sys;print(json.load(sys.stdin)["rest_auth_key"])')
H=(-H "X-Auth: $XA" -H "X-Auth-Rest: $XR" -H "Tus-Resumable: 1.0.0")

curl -fsS -o /dev/null -X POST "${H[@]}" -H "Upload-Length: $SIZE" -H "Upload-Offset: 0" "$URL/.h5g/$NAME?override=true"
OFF=$(curl -fsS -o /dev/null -D - -X PATCH "${H[@]}" -H "Content-Type: application/offset+octet-stream" -H "Upload-Offset: 0" \
  --data-binary "@$PKG" "$URL/.h5g/$NAME?override=true" | tr -d '\r' | awk 'tolower($1)=="upload-offset:"{print $2}')
[ "$OFF" = "$SIZE" ] || { echo "upload incomplete: $OFF of $SIZE" >&2; exit 1; }

# The import answers 500 on big archives even when it applies (measured 23-nov-2026),
# so the caller must verify the live site instead of trusting this status code.
CODE=$(curl -sS -o /dev/null -w '%{http_code}' -X POST "${AUTH[@]}" -d "{\"archive_name\":\"$NAME\"}" "$API/files/import-archive")
echo "uploaded $SIZE bytes as $NAME; import-archive HTTP $CODE"
