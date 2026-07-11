/**
 * Jelajah Kampus - Interactive UX Engine
 * Feature: Dropdown Support, Active State Observer & Mobile Responsive Navigation
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Active Navigation State On Scroll ---
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('a[href^="#"]:not(nav a)');

    const updateActiveNavState = () => {
        let currentSectionId = '';
        const scrollPosition = window.scrollY + 250; // offset untuk memicu perubahan lebih awal

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            // Reset state default light mode netral
            link.classList.remove('text-[#1B4EF5]', 'border-b-2', 'border-[#1B4EF5]', 'pb-1');
            link.classList.add('text-slate-600');

            const href = link.getAttribute('href');
            
            // Logika pencocokan untuk link biasa atau tombol dropdown parent
            if (href === `#${currentSectionId}` || 
               (link.tagName === 'BUTTON' && link.closest('.id-dropdown').innerHTML.includes(`#${currentSectionId}`))) {
                
                link.classList.add('text-[#1B4EF5]');
                link.classList.remove('text-slate-600');
                
                // Beri efek border bottom hanya jika itu elemen Anchor (bukan button dropdown)
                if(link.tagName === 'A') {
                    link.classList.add('border-b-2', 'border-[#1B4EF5]', 'pb-1');
                }
            }
        });
    };

    // Menggunakan throttling sederhana via requestAnimationFrame untuk optimasi performa batre device
    let isScrolling = false;
    window.addEventListener('scroll', () => {
        if (!isScrolling) {
            window.requestAnimationFrame(() => {
                updateActiveNavState();
                isScrolling = false;
            });
            isScrolling = true;
        }
    });

    // Jalankan sekali saat inisialisasi awal halaman terbuka
    updateActiveNavState();

    // --- 2. Hero Slideshow ---
    (function() {
        var slides = document.querySelectorAll('.hero-slide');
        var dots = document.querySelectorAll('.hero-slide-dot');
        if (!slides.length) return;

        var current = 0;
        var timer = null;
        var fadeTimer = null;
        var INTERVAL = 6000;

        function showSlide(index) {
            var prev = current;

            if (fadeTimer) {
                clearTimeout(fadeTimer);
                fadeTimer = null;
            }

            // Bersihkan slide selain prev dan index
            slides.forEach(function(el, i) {
                if (i !== index && i !== prev) {
                    el.classList.remove('active', 'fade-out');
                }
            });

            // Slide baru — langsung tampil
            slides[index].classList.remove('fade-out');
            slides[index].classList.add('active');

            // Slide lama — fade-out sambil pertahankan active (animasi tetap jalan)
            if (prev !== index) {
                slides[prev].classList.remove('fade-out');
                // Force reflow
                void slides[prev].offsetHeight;
                slides[prev].classList.add('fade-out');

                fadeTimer = setTimeout(function() {
                    slides[prev].classList.remove('active', 'fade-out');
                    fadeTimer = null;
                }, 1500);
            }

            dots.forEach(function(el, i) {
                el.classList.toggle('active', i === index);
            });

            current = index;
        }

        function nextSlide() {
            showSlide((current + 1) % slides.length);
        }

        function startTimer() {
            if (timer) clearInterval(timer);
            timer = setInterval(nextSlide, INTERVAL);
        }

        dots.forEach(function(dot) {
            dot.addEventListener('click', function() {
                showSlide(parseInt(this.dataset.slide));
                startTimer();
            });
        });

        var hero = document.querySelector('.hero-slideshow');
        if (hero) {
            hero.addEventListener('mouseenter', function() {
                if (timer) clearInterval(timer);
                timer = null;
            });
            hero.addEventListener('mouseleave', startTimer);
        }

        showSlide(0);
        startTimer();
    })();
    
    console.log("🚀 Jelajah Kampus UI/UX Engine Core v2.0 Loaded!");
});