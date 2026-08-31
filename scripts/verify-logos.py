import re
import urllib.request
from pathlib import Path

text = Path("src/lib/client-logos.ts").read_text()
pairs = re.findall(r'\["([^"]+)", "([^"]+)"\]', text)
print(f"Logo count: {len(pairs)}")
assert len(pairs) == 34, f"Expected 34 logos, got {len(pairs)}"

for name, domain in pairs:
    primary = f"https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://{domain}&size=128"
    fallback = f"https://www.google.com/s2/favicons?domain={domain}&sz=128"
    ok = False
    for u in (primary, fallback):
        try:
            n = len(urllib.request.urlopen(u, timeout=10).read())
            if n > 100:
                ok = True
                break
        except Exception:
            pass
    status = "OK" if ok else "INIT"  # INIT = initials fallback in UI
    print(f"{status} {name}")

print("done")
