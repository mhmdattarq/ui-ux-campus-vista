(function () {
    const navbarMarkup = `
<header class="sticky top-0 z-50 w-full px-3 sm:px-6 lg:px-8 pt-3 md:pt-4 animate-slideDown">
    <div class="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-slate-200/60 bg-white/95 px-4 py-3 shadow-[0_8px_40px_rgba(15,23,42,0.12)] backdrop-blur-xl transition-all duration-500 hover:shadow-[0_12px_50px_rgba(15,23,42,0.15)] hover:border-slate-300/80 sm:px-6">
        <a href="index.html" class="flex items-center gap-3 group">
            <div class="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#BE1A1A] via-purple-600 to-[#1B4EF5] p-[2px] shadow-lg shadow-blue-500/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-purple-500/40 group-hover:rotate-3">
                <div class="flex h-full w-full items-center justify-center rounded-[10px] bg-white overflow-hidden">
                    <img src="assets/img/itbrp.png" alt="Campus Vista Logo" class="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110">
                </div>
            </div>
            <span class="text-lg font-black tracking-tight transition-all duration-300 group-hover:scale-[1.02] sm:text-xl">
                <span class="bg-gradient-to-r from-[#BE1A1A] via-rose-600 to-red-600 bg-clip-text text-transparent animate-gradient">Campus</span>
                <span class="bg-gradient-to-r from-[#1B4EF5] via-blue-600 to-indigo-600 bg-clip-text text-transparent animate-gradient">Vista</span>
            </span>
        </a>

        <nav class="hidden items-center gap-1 text-[13px] font-semibold text-slate-600 md:flex" aria-label="Main navigation">
            <a data-nav-link href="index.html" class="nav-link relative rounded-full px-4 py-2.5 transition-all duration-300 hover:bg-gradient-to-r hover:from-slate-100 hover:to-slate-50 hover:text-slate-900 hover:shadow-md hover:scale-105 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:content-[''] before:transition-all before:duration-300 before:hover:border-red-100">Home</a>

            <div class="relative id-dropdown group py-2">
                <button type="button" data-nav-group="about" class="nav-link flex items-center gap-1.5 rounded-full px-4 py-2.5 transition-all duration-300 hover:bg-gradient-to-r hover:from-slate-100 hover:to-slate-50 hover:text-slate-900 hover:shadow-md hover:scale-105 focus:outline-none">
                    About
                    <svg class="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                <div class="absolute left-0 mt-3 w-60 rounded-2xl border border-slate-200/80 bg-white/95 p-2.5 shadow-2xl opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50 backdrop-blur-xl">
                    <a data-nav-link data-nav-parent="about" href="sejarah.html" class="nav-dropdown-link flex items-center gap-3 block px-4 py-3 text-xs rounded-xl text-slate-600 hover:text-[#BE1A1A] hover:bg-gradient-to-r hover:from-[#BE1A1A]/5 hover:to-transparent transition-all duration-200 hover:scale-[1.02] hover:shadow-sm">
                        <span>📜</span> Sejarah Kampus
                    </a>
                    <a data-nav-link data-nav-parent="about" href="profil.html" class="nav-dropdown-link flex items-center gap-3 block px-4 py-3 text-xs rounded-xl text-slate-600 hover:text-[#BE1A1A] hover:bg-gradient-to-r hover:from-[#BE1A1A]/5 hover:to-transparent transition-all duration-200 hover:scale-[1.02] hover:shadow-sm">
                        <span>🏢</span> Profil Kampus
                    </a>
                    <a data-nav-link data-nav-parent="about" href="visimisi.html" class="nav-dropdown-link flex items-center gap-3 block px-4 py-3 text-xs rounded-xl text-slate-600 hover:text-[#BE1A1A] hover:bg-gradient-to-r hover:from-[#BE1A1A]/5 hover:to-transparent transition-all duration-200 hover:scale-[1.02] hover:shadow-sm">
                        <span>🎯</span> Visi &amp; Misi
                    </a>
                </div>
            </div>

            <div class="relative id-dropdown group py-2">
                <button type="button" data-nav-group="explore" class="nav-link flex items-center gap-1.5 rounded-full px-4 py-2.5 transition-all duration-300 hover:bg-gradient-to-r hover:from-slate-100 hover:to-slate-50 hover:text-slate-900 hover:shadow-md hover:scale-105 focus:outline-none">
                    Explore
                    <svg class="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                <div class="absolute left-1/2 mt-3 w-[520px] -translate-x-1/2 rounded-2xl border border-slate-200/80 bg-white/95 p-4 shadow-2xl opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50 backdrop-blur-xl grid grid-cols-2 gap-3">
                    <a data-nav-link data-nav-parent="explore" href="explore.html" class="nav-dropdown-link flex items-center gap-3 block px-4 py-3 text-xs rounded-xl text-slate-600 hover:text-[#1B4EF5] hover:bg-gradient-to-r hover:from-[#1B4EF5]/5 hover:to-transparent transition-all duration-200 hover:scale-[1.02] hover:shadow-sm">
                        <span>🏛️</span> Gedung Perkuliahan
                    </a>
                    <a data-nav-link data-nav-parent="explore" href="explore.html" class="nav-dropdown-link flex items-center gap-3 block px-4 py-3 text-xs rounded-xl text-slate-600 hover:text-[#1B4EF5] hover:bg-gradient-to-r hover:from-[#1B4EF5]/5 hover:to-transparent transition-all duration-200 hover:scale-[1.02] hover:shadow-sm">
                        <span>🚪</span> Ruang Kelas
                    </a>
                    <a data-nav-link data-nav-parent="explore" href="explore.html" class="nav-dropdown-link flex items-center gap-3 block px-4 py-3 text-xs rounded-xl text-slate-600 hover:text-[#1B4EF5] hover:bg-gradient-to-r hover:from-[#1B4EF5]/5 hover:to-transparent transition-all duration-200 hover:scale-[1.02] hover:shadow-sm">
                        <span>💻</span> Laboratorium
                    </a>
                    <a data-nav-link data-nav-parent="explore" href="explore.html" class="nav-dropdown-link flex items-center gap-3 block px-4 py-3 text-xs rounded-xl text-slate-600 hover:text-[#1B4EF5] hover:bg-gradient-to-r hover:from-[#1B4EF5]/5 hover:to-transparent transition-all duration-200 hover:scale-[1.02] hover:shadow-sm">
                        <span>📚</span> Perpustakaan
                    </a>
                    <a data-nav-link data-nav-parent="explore" href="explore.html" class="nav-dropdown-link flex items-center gap-3 block px-4 py-3 text-xs rounded-xl text-slate-600 hover:text-[#1B4EF5] hover:bg-gradient-to-r hover:from-[#1B4EF5]/5 hover:to-transparent transition-all duration-200 hover:scale-[1.02] hover:shadow-sm">
                        <span>🕌</span> Musholla
                    </a>
                    <a data-nav-link data-nav-parent="explore" href="explore.html" class="nav-dropdown-link flex items-center gap-3 block px-4 py-3 text-xs rounded-xl text-slate-600 hover:text-[#1B4EF5] hover:bg-gradient-to-r hover:from-[#1B4EF5]/5 hover:to-transparent transition-all duration-200 hover:scale-[1.02] hover:shadow-sm">
                        <span>☕</span> Kantin
                    </a>
                    <a data-nav-link data-nav-parent="explore" href="explore.html" class="nav-dropdown-link flex items-center gap-3 block px-4 py-3 text-xs rounded-xl text-slate-600 hover:text-[#1B4EF5] hover:bg-gradient-to-r hover:from-[#1B4EF5]/5 hover:to-transparent transition-all duration-200 hover:scale-[1.02] hover:shadow-sm">
                        <span>⚽</span> Lapangan
                    </a>
                    <a data-nav-link data-nav-parent="explore" href="explore.html" class="nav-dropdown-link flex items-center gap-3 block px-4 py-3 text-xs rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-all duration-200 italic">
                        <span>✨</span> etc
                    </a>
                </div>
            </div>

            <a data-nav-link href="index.html#contact" class="nav-link rounded-full px-4 py-2.5 transition-all duration-300 hover:bg-gradient-to-r hover:from-slate-100 hover:to-slate-50 hover:text-slate-900 hover:shadow-md hover:scale-105">Contact</a>
        </nav>

        <div class="flex items-center gap-2 sm:gap-3">
            <a href="explore.html" class="hidden rounded-full bg-gradient-to-r from-[#BE1A1A] via-purple-600 to-[#1B4EF5] px-5 py-2.5 text-[11px] font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/40 hover:scale-105 active:scale-[0.98] sm:inline-block relative overflow-hidden group">
                <span class="relative z-10">Mulai Eksplorasi 🚀</span>
                <span class="absolute inset-0 bg-gradient-to-r from-red-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
            <button id="navbar-toggle" class="rounded-full border border-slate-200/80 bg-white/90 p-2.5 text-slate-600 transition-all duration-300 hover:border-slate-300 hover:text-slate-900 hover:shadow-md hover:scale-110 focus:outline-none md:hidden" aria-label="Open navigation menu">
                <svg class="h-5 w-5 transition-transform duration-300 hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>
    </div>
</header>

<div id="navbar-mobile" class="fixed inset-0 bg-slate-900/50 backdrop-blur-md z-50 opacity-0 invisible pointer-events-none transition-all duration-300 md:hidden">
    <div id="navbar-mobile-panel" class="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-white/95 backdrop-blur-xl p-6 shadow-2xl flex flex-col justify-between transform translate-x-full transition-transform duration-300">
        <div>
            <div class="flex items-center justify-between pb-6 border-b border-slate-200/80">
                <div class="flex items-center gap-3">
                    <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#BE1A1A] via-purple-600 to-[#1B4EF5] p-[2px] shadow-lg">
                        <div class="flex h-full w-full items-center justify-center rounded-[9px] bg-white overflow-hidden">
                            <img src="assets/img/itbrp.png" alt="Campus Vista Logo" class="h-8 w-8 object-contain">
                        </div>
                    </div>
                    <span class="text-md font-black tracking-tight">
                        <span class="bg-gradient-to-r from-[#BE1A1A] via-rose-600 to-red-600 bg-clip-text text-transparent">Campus</span> 
                        <span class="bg-gradient-to-r from-[#1B4EF5] via-blue-600 to-indigo-600 bg-clip-text text-transparent">Vista</span>
                    </span>
                </div>
                <button id="navbar-mobile-close" class="rounded-full p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-all duration-200 hover:rotate-90" aria-label="Close navigation menu">
                    <svg class="w-5 h-5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <nav class="mt-6 space-y-4 flex flex-col text-sm font-semibold text-slate-600" aria-label="Mobile navigation">
                <a data-nav-link href="index.html" class="nav-link-mobile relative rounded-xl px-4 py-3 transition-all duration-200 hover:bg-gradient-to-r hover:from-slate-100 hover:to-slate-50 hover:text-slate-900 hover:shadow-sm hover:scale-[1.02]">Home</a>
                <div>
                    <p class="text-xs text-slate-400 font-bold uppercase tracking-wider mb-3 pl-1">About</p>
                    <div class="space-y-2 pl-2">
                        <a data-nav-link data-nav-parent="about" href="sejarah.html" class="nav-link-mobile flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 hover:bg-gradient-to-r hover:from-[#BE1A1A]/5 hover:to-transparent hover:text-[#BE1A1A] hover:shadow-sm hover:scale-[1.02]">
                            <span>📜</span> Sejarah Kampus
                        </a>
                        <a data-nav-link data-nav-parent="about" href="profil.html" class="nav-link-mobile flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 hover:bg-gradient-to-r hover:from-[#BE1A1A]/5 hover:to-transparent hover:text-[#BE1A1A] hover:shadow-sm hover:scale-[1.02]">
                            <span>🏢</span> Profil Kampus
                        </a>
                        <a data-nav-link data-nav-parent="about" href="visimisi.html" class="nav-link-mobile flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 hover:bg-gradient-to-r hover:from-[#BE1A1A]/5 hover:to-transparent hover:text-[#BE1A1A] hover:shadow-sm hover:scale-[1.02]">
                            <span>🎯</span> Visi &amp; Misi
                        </a>
                    </div>
                </div>
                <div>
                    <p class="text-xs text-slate-400 font-bold uppercase tracking-wider mb-3 pl-1">Explore</p>
                    <div class="grid grid-cols-2 gap-2 pl-2 text-xs">
                        <a data-nav-link data-nav-parent="explore" href="explore.html" class="nav-link-mobile flex items-center gap-2 rounded-xl px-3 py-2.5 transition-all duration-200 hover:bg-gradient-to-r hover:from-[#1B4EF5]/5 hover:to-transparent hover:text-[#1B4EF5] hover:shadow-sm hover:scale-[1.02]">
                            <span>🏛️</span> Gedung
                        </a>
                        <a data-nav-link data-nav-parent="explore" href="explore.html" class="nav-link-mobile flex items-center gap-2 rounded-xl px-3 py-2.5 transition-all duration-200 hover:bg-gradient-to-r hover:from-[#1B4EF5]/5 hover:to-transparent hover:text-[#1B4EF5] hover:shadow-sm hover:scale-[1.02]">
                            <span>🚪</span> Kelas
                        </a>
                        <a data-nav-link data-nav-parent="explore" href="explore.html" class="nav-link-mobile flex items-center gap-2 rounded-xl px-3 py-2.5 transition-all duration-200 hover:bg-gradient-to-r hover:from-[#1B4EF5]/5 hover:to-transparent hover:text-[#1B4EF5] hover:shadow-sm hover:scale-[1.02]">
                            <span>💻</span> Lab
                        </a>
                        <a data-nav-link data-nav-parent="explore" href="explore.html" class="nav-link-mobile flex items-center gap-2 rounded-xl px-3 py-2.5 transition-all duration-200 hover:bg-gradient-to-r hover:from-[#1B4EF5]/5 hover:to-transparent hover:text-[#1B4EF5] hover:shadow-sm hover:scale-[1.02]">
                            <span>📚</span> Perpus
                        </a>
                        <a data-nav-link data-nav-parent="explore" href="explore.html" class="nav-link-mobile flex items-center gap-2 rounded-xl px-3 py-2.5 transition-all duration-200 hover:bg-gradient-to-r hover:from-[#1B4EF5]/5 hover:to-transparent hover:text-[#1B4EF5] hover:shadow-sm hover:scale-[1.02]">
                            <span>🕌</span> Musholla
                        </a>
                        <a data-nav-link data-nav-parent="explore" href="explore.html" class="nav-link-mobile flex items-center gap-2 rounded-xl px-3 py-2.5 transition-all duration-200 hover:bg-gradient-to-r hover:from-[#1B4EF5]/5 hover:to-transparent hover:text-[#1B4EF5] hover:shadow-sm hover:scale-[1.02]">
                            <span>☕</span> Kantin
                        </a>
                        <a data-nav-link data-nav-parent="explore" href="explore.html" class="nav-link-mobile flex items-center gap-2 rounded-xl px-3 py-2.5 transition-all duration-200 hover:bg-gradient-to-r hover:from-[#1B4EF5]/5 hover:to-transparent hover:text-[#1B4EF5] hover:shadow-sm hover:scale-[1.02]">
                            <span>⚽</span> Lapangan
                        </a>
                    </div>
                </div>
                <a data-nav-link href="index.html#contact" class="nav-link-mobile rounded-xl px-4 py-3 transition-all duration-200 hover:bg-gradient-to-r hover:from-slate-100 hover:to-slate-50 hover:text-slate-900 hover:shadow-sm hover:scale-[1.02]">Contact</a>
            </nav>
        </div>
        <div class="pt-6 border-t border-slate-200/80">
            <a href="explore.html" class="block w-full rounded-xl bg-gradient-to-r from-[#BE1A1A] via-purple-600 to-[#1B4EF5] px-5 py-3 text-center text-xs font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/40 hover:scale-105 active:scale-[0.98]">Mulai Eksplorasi 🚀</a>
        </div>
    </div>
</div>
`;

    const body = document.body;
    const placeholder = document.getElementById('navbar');
    if (!placeholder) {
        return;
    }

    placeholder.insertAdjacentHTML('afterend', navbarMarkup);

    const mobileOverlay = document.getElementById('navbar-mobile');
    const mobilePanel = document.getElementById('navbar-mobile-panel');
    const toggleButton = document.getElementById('navbar-toggle');
    const closeButton = document.getElementById('navbar-mobile-close');

    const openMobileMenu = () => {
        mobileOverlay.classList.remove('invisible', 'opacity-0', 'pointer-events-none');
        mobileOverlay.classList.add('visible', 'opacity-100');
        mobilePanel.classList.remove('translate-x-full');
    };

    const closeMobileMenu = () => {
        mobilePanel.classList.add('translate-x-full');
        mobileOverlay.classList.remove('opacity-100', 'visible');
        mobileOverlay.classList.add('opacity-0');
        window.setTimeout(() => {
            mobileOverlay.classList.add('invisible', 'pointer-events-none');
        }, 300);
    };

    toggleButton?.addEventListener('click', openMobileMenu);
    closeButton?.addEventListener('click', closeMobileMenu);
    mobileOverlay?.addEventListener('click', (event) => {
        if (event.target === mobileOverlay) {
            closeMobileMenu();
        }
    });

    const getPageSlug = (urlString) => {
        try {
            const url = new URL(urlString, window.location.href);
            let file = url.pathname.split('/').pop().toLowerCase();
            if (!file || file === '' || file === 'home.html') {
                file = 'index.html';
            }
            return file.split('#')[0];
        } catch (error) {
            return 'index.html';
        }
    };

    const currentPage = getPageSlug(window.location.href);
    const navLinks = Array.from(document.querySelectorAll('[data-nav-link]'));
    const menuGroupButtons = {
        about: document.querySelector('[data-nav-group="about"]'),
        explore: document.querySelector('[data-nav-group="explore"]'),
    };

    const activeLinkClasses = ['bg-gradient-to-r', 'from-[#BE1A1A]/10', 'to-[#1B4EF5]/10', 'text-[#1B4EF5]', 'shadow-md', 'font-bold', 'scale-105'];
    const activeButtonClasses = ['bg-gradient-to-r', 'from-[#BE1A1A]/10', 'to-[#1B4EF5]/10', 'text-[#1B4EF5]', 'shadow-md', 'font-bold'];
    const activeMobileLinkClasses = ['bg-gradient-to-r', 'from-[#BE1A1A]/10', 'to-[#1B4EF5]/10', 'text-[#1B4EF5]', 'shadow-sm', 'font-bold'];

    let isSubpageActive = false;

    navLinks.forEach((link) => {
        const linkHref = link.getAttribute('href') || '';
        const linkPage = getPageSlug(link.href);
        const linkParent = link.dataset.navParent;

        link.classList.remove(...activeLinkClasses, ...activeMobileLinkClasses);

        if (linkPage === currentPage && linkPage !== 'index.html') {
            isSubpageActive = true;
            
            if (link.classList.contains('nav-link')) {
                link.classList.add(...activeLinkClasses);
            } else if (link.classList.contains('nav-link-mobile')) {
                link.classList.add(...activeMobileLinkClasses);
            } else if (link.classList.contains('nav-dropdown-link')) {
                link.classList.add('text-[#1B4EF5]', 'font-bold', 'bg-gradient-to-r', 'from-[#1B4EF5]/10', 'to-transparent', 'shadow-sm');
            }
            
            if (linkParent && menuGroupButtons[linkParent]) {
                menuGroupButtons[linkParent].classList.add(...activeButtonClasses);
            }
        }
    });

    if (currentPage === 'index.html' && !isSubpageActive) {
        navLinks.forEach((link) => {
            const linkPage = getPageSlug(link.href);
            const linkHref = link.getAttribute('href') || '';
            
            if (linkPage === 'index.html' && !linkHref.includes('#')) {
                if (link.classList.contains('nav-link')) {
                    link.classList.add(...activeLinkClasses);
                } else if (link.classList.contains('nav-link-mobile')) {
                    link.classList.add(...activeMobileLinkClasses);
                }
            }
        });
    }
})();
