(function () {
    const navbarMarkup = `
<header class="sticky top-0 z-50 w-full px-3 sm:px-6 lg:px-8 pt-3 md:pt-4">
    <div class="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-slate-200/80 bg-white/80 px-3 py-2.5 shadow-[0_10px_35px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-300 sm:px-4">
        <a href="index.html" class="flex items-center gap-3 group">
            <div class="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#BE1A1A] to-[#1B4EF5] text-sm font-black text-white shadow-sm">JK</div>
            <span class="text-base font-black tracking-tight transition-transform duration-300 group-hover:scale-[1.01] sm:text-lg">
                <span class="text-[#BE1A1A]">JELAJAH</span>
                <span class="text-[#1B4EF5]">KAMPUS</span>
            </span>
        </a>

        <nav class="hidden items-center gap-1 text-[13px] font-semibold text-slate-600 md:flex" aria-label="Main navigation">
            <a data-nav-link href="index.html" class="rounded-full px-3.5 py-2 transition-all duration-300 hover:bg-slate-100 hover:text-slate-900">Home</a>

            <div class="relative id-dropdown group py-2">
                <button type="button" data-nav-group="about" class="flex items-center gap-1 rounded-full px-3.5 py-2 transition-all duration-200 hover:bg-slate-100 hover:text-slate-900 focus:outline-none">
                    About
                    <svg class="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                <div class="absolute left-0 mt-2 w-52 rounded-2xl border border-slate-200/80 bg-white p-2 shadow-xl opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
                    <a data-nav-link data-nav-parent="about" href="sejarah.html" class="block px-4 py-2.5 text-xs rounded-xl text-slate-600 hover:text-[#BE1A1A] hover:bg-[#BE1A1A]/5 transition-all">📜 Sejarah Kampus</a>
                    <a data-nav-link data-nav-parent="about" href="profil.html" class="block px-4 py-2.5 text-xs rounded-xl text-slate-600 hover:text-[#BE1A1A] hover:bg-[#BE1A1A]/5 transition-all">🏢 Profil Kampus</a>
                    <a data-nav-link data-nav-parent="about" href="prestasi.html" class="block px-4 py-2.5 text-xs rounded-xl text-slate-600 hover:text-[#BE1A1A] hover:bg-[#BE1A1A]/5 transition-all">🏆 Prestasi</a>
                    <a data-nav-link data-nav-parent="about" href="visimisi.html" class="block px-4 py-2.5 text-xs rounded-xl text-slate-600 hover:text-[#BE1A1A] hover:bg-[#BE1A1A]/5 transition-all">🎯 Visi &amp; Misi</a>
                </div>
            </div>

            <div class="relative id-dropdown group py-2">
                <button type="button" data-nav-group="explore" class="flex items-center gap-1 rounded-full px-3.5 py-2 transition-all duration-200 hover:bg-slate-100 hover:text-slate-900 focus:outline-none">
                    Explore
                    <svg class="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                <div class="absolute left-1/2 mt-2 w-[420px] -translate-x-1/2 rounded-2xl border border-slate-200/80 bg-white p-3 shadow-xl opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50 grid grid-cols-2 gap-1">
                    <a data-nav-link data-nav-parent="explore" href="explore.html" class="block px-3 py-2 text-xs rounded-xl text-slate-600 hover:text-[#1B4EF5] hover:bg-[#1B4EF5]/5 transition-all">🏛️ Gedung Perkuliahan</a>
                    <a data-nav-link data-nav-parent="explore" href="explore.html" class="block px-3 py-2 text-xs rounded-xl text-slate-600 hover:text-[#1B4EF5] hover:bg-[#1B4EF5]/5 transition-all">🚪 Ruang Kelas</a>
                    <a data-nav-link data-nav-parent="explore" href="explore.html" class="block px-3 py-2 text-xs rounded-xl text-slate-600 hover:text-[#1B4EF5] hover:bg-[#1B4EF5]/5 transition-all">💻 Laboratorium</a>
                    <a data-nav-link data-nav-parent="explore" href="explore.html" class="block px-3 py-2 text-xs rounded-xl text-slate-600 hover:text-[#1B4EF5] hover:bg-[#1B4EF5]/5 transition-all">📚 Perpustakaan</a>
                    <a data-nav-link data-nav-parent="explore" href="explore.html" class="block px-3 py-2 text-xs rounded-xl text-slate-600 hover:text-[#1B4EF5] hover:bg-[#1B4EF5]/5 transition-all">🕌 Musholla</a>
                    <a data-nav-link data-nav-parent="explore" href="explore.html" class="block px-3 py-2 text-xs rounded-xl text-slate-600 hover:text-[#1B4EF5] hover:bg-[#1B4EF5]/5 transition-all">☕ Kantin</a>
                    <a data-nav-link data-nav-parent="explore" href="explore.html" class="block px-3 py-2 text-xs rounded-xl text-slate-600 hover:text-[#1B4EF5] hover:bg-[#1B4EF5]/5 transition-all">⚽ Lapangan</a>
                    <a data-nav-link data-nav-parent="explore" href="explore.html" class="block px-3 py-2 text-xs rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-all italic">✨ etc</a>
                </div>
            </div>

            <a data-nav-link href="index.html#contact" class="rounded-full px-3.5 py-2 transition-all duration-300 hover:bg-slate-100 hover:text-slate-900">Contact</a>
        </nav>

        <div class="flex items-center gap-2 sm:gap-3">
            <a href="explore.html" class="hidden rounded-full bg-gradient-to-r from-[#BE1A1A] to-[#1B4EF5] px-4 py-2 text-[11px] font-semibold text-white shadow-sm transition-all duration-300 hover:opacity-95 active:scale-[0.98] sm:inline-block">Mulai Eksplorasi 🚀</a>
            <button id="navbar-toggle" class="rounded-full border border-slate-200/80 bg-white/90 p-2.5 text-slate-600 transition-all duration-200 hover:border-slate-300 hover:text-slate-900 focus:outline-none md:hidden" aria-label="Open navigation menu">
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>
    </div>
</header>

<div id="navbar-mobile" class="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 opacity-0 invisible pointer-events-none transition-all duration-300 md:hidden">
    <div id="navbar-mobile-panel" class="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-white p-6 shadow-2xl flex flex-col justify-between transform translate-x-full transition-transform duration-300">
        <div>
            <div class="flex items-center justify-between pb-6 border-b border-slate-100">
                <span class="text-md font-black tracking-tight"><span class="text-[#BE1A1A]">JELAJAH</span> <span class="text-[#1B4EF5]">KAMPUS</span></span>
                <button id="navbar-mobile-close" class="text-slate-500 hover:text-slate-900" aria-label="Close navigation menu">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <nav class="mt-6 space-y-4 flex flex-col text-sm font-semibold text-slate-600" aria-label="Mobile navigation">
                <a data-nav-link href="index.html" class="rounded-full px-3.5 py-2 transition-all duration-200 hover:bg-slate-100 hover:text-slate-900">Home</a>
                <div>
                    <p class="text-xs text-slate-400 font-bold uppercase tracking-wider">About</p>
                    <div class="mt-2 space-y-2 pl-2">
                        <a data-nav-link data-nav-parent="about" href="sejarah.html" class="block rounded-full px-3.5 py-2 transition-all duration-200 hover:bg-slate-100 hover:text-slate-900">📜 Sejarah Kampus</a>
                        <a data-nav-link data-nav-parent="about" href="profil.html" class="block rounded-full px-3.5 py-2 transition-all duration-200 hover:bg-slate-100 hover:text-slate-900">🏢 Profil Kampus</a>
                        <a data-nav-link data-nav-parent="about" href="prestasi.html" class="block rounded-full px-3.5 py-2 transition-all duration-200 hover:bg-slate-100 hover:text-slate-900">🏆 Prestasi</a>
                        <a data-nav-link data-nav-parent="about" href="visimisi.html" class="block rounded-full px-3.5 py-2 transition-all duration-200 hover:bg-slate-100 hover:text-slate-900">🎯 Visi &amp; Misi</a>
                    </div>
                </div>
                <div>
                    <p class="text-xs text-slate-400 font-bold uppercase tracking-wider">Explore</p>
                    <div class="mt-2 grid grid-cols-2 gap-2 pl-2 text-xs">
                        <a data-nav-link data-nav-parent="explore" href="explore.html" class="block rounded-full px-3.5 py-2 transition-all duration-200 hover:bg-slate-100 hover:text-slate-900">🏛️ Gedung</a>
                        <a data-nav-link data-nav-parent="explore" href="explore.html" class="block rounded-full px-3.5 py-2 transition-all duration-200 hover:bg-slate-100 hover:text-slate-900">🚪 Kelas</a>
                        <a data-nav-link data-nav-parent="explore" href="explore.html" class="block rounded-full px-3.5 py-2 transition-all duration-200 hover:bg-slate-100 hover:text-slate-900">💻 Lab</a>
                        <a data-nav-link data-nav-parent="explore" href="explore.html" class="block rounded-full px-3.5 py-2 transition-all duration-200 hover:bg-slate-100 hover:text-slate-900">📚 Perpus</a>
                        <a data-nav-link data-nav-parent="explore" href="explore.html" class="block rounded-full px-3.5 py-2 transition-all duration-200 hover:bg-slate-100 hover:text-slate-900">🕌 Musholla</a>
                        <a data-nav-link data-nav-parent="explore" href="explore.html" class="block rounded-full px-3.5 py-2 transition-all duration-200 hover:bg-slate-100 hover:text-slate-900">☕ Kantin</a>
                        <a data-nav-link data-nav-parent="explore" href="explore.html" class="block rounded-full px-3.5 py-2 transition-all duration-200 hover:bg-slate-100 hover:text-slate-900">⚽ Lapangan</a>
                    </div>
                </div>
                <a data-nav-link href="index.html#contact" class="rounded-full px-3.5 py-2 transition-all duration-200 hover:bg-slate-100 hover:text-slate-900">Contact</a>
            </nav>
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
            if (!file || file === 'home.html') {
                file = 'index.html';
            }
            return file;
        } catch (error) {
            return 'home.html';
        }
    };

    const currentPage = getPageSlug(window.location.href);
    const navLinks = Array.from(document.querySelectorAll('[data-nav-link]'));
    const menuGroupButtons = {
        about: document.querySelector('[data-nav-group="about"]'),
        explore: document.querySelector('[data-nav-group="explore"]'),
    };

    const activeLinkClasses = ['text-[#1B4EF5]', 'border-b-2', 'border-[#1B4EF5]', 'pb-1'];
    const activeButtonClasses = ['text-[#1B4EF5]'];

    navLinks.forEach((link) => {
        const linkPage = getPageSlug(link.href);
        const linkParent = link.dataset.navParent;

        if (linkPage === currentPage) {
            link.classList.add(...activeLinkClasses);
            if (linkParent && menuGroupButtons[linkParent]) {
                menuGroupButtons[linkParent].classList.add(...activeButtonClasses);
            }
        }
    });

    if (currentPage === 'index.html') {
        const homeLink = navLinks.find((link) => getPageSlug(link.href) === 'index.html');
        if (homeLink) {
            homeLink.classList.add(...activeLinkClasses);
        }
    }
})();
