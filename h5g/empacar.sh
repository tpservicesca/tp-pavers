#!/usr/bin/env bash
# Turns Next's `out/` into the layout Hostinger Agency (h5g) needs and packs it.
# Usage: h5g/empacar.sh <cfg.php> <destino.tar.gz>
set -euo pipefail
cd "$(dirname "$0")/.."
CFG="$1"; DEST="$2"
W=$(mktemp -d); trap 'rm -rf "$W"' EXIT
cp -a out/. "$W/"
cd "$W"
mkdir .paginas .api
# Pages = every .html, plus the RSC payloads (.txt) and the folders Next creates per page.
# Assets = anything with no page next to it: they stay public.
for f in *.html; do
  n="${f%.html}"
  mv "$f" .paginas/
  [ -f "$n.txt" ] && mv "$n.txt" .paginas/
  [ -d "$n" ] && mv "$n" .paginas/
done
for f in __next.*.txt sitemap.xml; do [ -e "$f" ] && mv "$f" .paginas/; done
[ -d _not-found ] && mv _not-found .paginas/
cp "$OLDPWD/h5g/index.php" index.php
cp "$OLDPWD/h5g/lead.php" .api/lead.php
cp "$CFG" .api/.cfg.php
echo "public: $(ls -A | tr '\n' ' ')"
echo "pages: $(find .paginas -name '*.html' | wc -l)"
tar czf "$DEST" $(ls -A)
