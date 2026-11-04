import os
import re
import urllib.parse
import mimetypes

def test_html_links():
    with open('index.html', 'r', encoding='utf-8') as f:
        html = f.read()

    # Find all hrefs
    href_pattern = re.compile(r'href=[\'"]([^\'"]+)[\'"]')
    hrefs = href_pattern.findall(html)
    print(f"[TEST 1] Total href links identified: {len(hrefs)}")

    broken_hrefs = []
    internal_anchors = []
    external_links = []

    for h in hrefs:
        if h.startswith('#'):
            internal_anchors.append(h)
        elif h.startswith(('http://', 'https://', 'mailto:', 'tel:', 'data:')):
            external_links.append(h)
        else:
            clean_path = urllib.parse.unquote(h)
            if not os.path.exists(clean_path):
                broken_hrefs.append(clean_path)

    print(f"  -> Internal anchor links ({len(internal_anchors)}): {internal_anchors}")
    print(f"  -> External links ({len(external_links)}): {external_links}")
    print(f"  -> Broken local href files ({len(broken_hrefs)}): {broken_hrefs}")

    # Check internal anchors exist in index.html
    missing_targets = []
    for anchor in internal_anchors:
        target_id = anchor.lstrip('#')
        if target_id and not re.search(rf'id=[\'"]{target_id}[\'"]', html):
            missing_targets.append(anchor)

    print(f"  -> Missing anchor targets in DOM ({len(missing_targets)}): {missing_targets}")

    # Find all srcs
    src_pattern = re.compile(r'src=[\'"]([^\'"]+)[\'"]')
    srcs = src_pattern.findall(html)
    print(f"\n[TEST 2] Total src links identified: {len(srcs)}")

    broken_srcs = []
    for s in srcs:
        if s.startswith(('http://', 'https://', 'data:')):
            continue
        clean_path = urllib.parse.unquote(s)
        if not os.path.exists(clean_path):
            broken_srcs.append(clean_path)

    print(f"  -> Broken local src files ({len(broken_srcs)}): {broken_srcs}")

    # Check all certificates defined in script.js
    with open('js/script.js', 'r', encoding='utf-8') as f:
        js = f.read()

    file_paths = re.findall(r"filePath:\s*'([^']+)'", js)
    print(f"\n[TEST 3] Certificate filePaths in script.js ({len(file_paths)}):")
    broken_cert_files = []
    for fp in file_paths:
        clean_path = urllib.parse.unquote(fp)
        exists = os.path.exists(clean_path)
        size = os.path.getsize(clean_path) if exists else 0
        mime = mimetypes.guess_type(clean_path)[0] or 'unknown'
        print(f"  -> {clean_path:50} : {'EXISTS' if exists else 'MISSING'} ({size:,} bytes, {mime})")
        if not exists or size == 0:
            broken_cert_files.append(clean_path)

    # Test File Assets Integrity & MIME types
    print(f"\n[TEST 4] Critical Core Asset Files & MIME Types:")
    core_files = [
        'index.html',
        'css/style.css',
        'js/script.js',
        'assets/resume/Utkarsh_Dewangan_Resume.pdf',
        'assets/images/profile_pic.jpg',
        'README.md',
        'AAT1_REPORT.md',
        '.gitignore',
        'screenshots/README.md'
    ]

    broken_core = []
    for cf in core_files:
        exists = os.path.exists(cf)
        size = os.path.getsize(cf) if exists else 0
        mime = mimetypes.guess_type(cf)[0] or 'text/plain'
        print(f"  -> {cf:45} : {'EXISTS' if exists else 'MISSING'} ({size:,} bytes, {mime})")
        if not exists or size == 0:
            broken_core.append(cf)

    all_pass = (len(broken_hrefs) == 0 and len(missing_targets) == 0 and len(broken_srcs) == 0 and len(broken_cert_files) == 0 and len(broken_core) == 0)
    print(f"\n==========================================")
    print(f"OVERALL TEST STATUS: {'ALL TESTS PASSED (100% OK)' if all_pass else 'FAILED WITH ISSUES'}")
    print(f"==========================================")

if __name__ == '__main__':
    test_html_links()
