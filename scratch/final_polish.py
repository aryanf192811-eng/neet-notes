import os
import re

notes_dir = 'notes'

# Removal flags
REMOVE_CH_NAV = True
REMOVE_LEGACY_JS = True

ch_nav_pattern = re.compile(r'<!--\s*<div class="ch-nav">.*?</div>\s*-->|<div class="ch-nav">.*?</div>', re.DOTALL)

legacy_js_pattern = re.compile(r'/\* ── Dark mode ──.*?\*/\s*function toggleDark\(\).*?// Restore saved theme.*?if \(saved\) document\.documentElement\.setAttribute\("data-theme", saved\);', re.DOTALL)

# Also remove the specific theme storage from the topic check area if any
legacy_theme_storage = re.compile(r'localStorage\.setItem\("theme", cur === "dark" \? "light" : "dark"\);', re.DOTALL)

files = [f for f in os.listdir(notes_dir) if f.endswith('.html')]

for filename in files:
    path = os.path.join(notes_dir, filename)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Remove ch-nav (Hub/Toggle buttons)
    if REMOVE_CH_NAV:
        content = ch_nav_pattern.sub('', content)
    
    # 2. Remove bottom legacy theme script
    if REMOVE_LEGACY_JS:
        content = legacy_js_pattern.sub('', content)
        content = legacy_theme_storage.sub('', content)
    
    # 3. Quick cleanup of gaps left behind
    content = content.replace('\n\n\n\n', '\n\n')
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

print(f"Cleaned {len(files)} note files.")
