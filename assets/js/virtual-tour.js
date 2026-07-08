console.log('Virtual Tour script loaded');

(function() {
    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let rotation = { x: 0, y: 0 };
    let currentImage = null;
    let canvas = null;
    let ctx = null;

    function init360Viewer() {
        console.log('Initializing 360 viewer...');
        
        const modal = document.getElementById('tour-360-modal');
        const closeBtn = document.getElementById('close-360');
        canvas = document.getElementById('canvas-360');
        ctx = canvas ? canvas.getContext('2d') : null;

        if (!modal || !closeBtn || !canvas || !ctx) {
            console.error('Missing elements:', { modal, closeBtn, canvas, ctx });
            return;
        }
        
        console.log('All elements found, setting up...');

        window.open360Tour = function(imageSrc) {
            console.log('open360Tour called with:', imageSrc);
            currentImage = new Image();
            
            currentImage.onload = function() {
                console.log('Image loaded successfully');
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                rotation.x = 0;
                rotation.y = 180;
                modal.classList.remove('hidden');
                modal.classList.add('flex');
                document.body.style.overflow = 'hidden';
                render360();
            };

            currentImage.onerror = function() {
                console.error('Failed to load 360 image:', imageSrc);
                alert('Gagal memuat gambar 360. Pastikan file Gedung.JPG ada di folder assets/img/');
            };

            currentImage.src = imageSrc;
        };

        window.close360Tour = function() {
            console.log('Closing 360 tour');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            document.body.style.overflow = '';
            currentImage = null;
        };

        closeBtn.addEventListener('click', window.close360Tour);
        
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                window.close360Tour();
            }
        });

        canvas.addEventListener('mousedown', handleMouseDown);
        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseup', handleMouseUp);
        canvas.addEventListener('mouseleave', handleMouseUp);

        canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
        canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
        canvas.addEventListener('touchend', handleTouchEnd);

        window.addEventListener('resize', function() {
            if (currentImage && !modal.classList.contains('hidden')) {
                canvas.width = modal.clientWidth;
                canvas.height = modal.clientHeight;
                render360();
            }
        });

        function handleMouseDown(e) {
            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;
            canvas.style.cursor = 'grabbing';
        }

        function handleMouseMove(e) {
            if (!isDragging || !currentImage) return;
            
            const deltaX = e.clientX - startX;
            const deltaY = e.clientY - startY;
            
            rotation.y += deltaX * 0.5;
            rotation.x += deltaY * 0.3;
            
            rotation.x = Math.max(-60, Math.min(60, rotation.x));
            
            startX = e.clientX;
            startY = e.clientY;
            
            render360();
        }

        function handleMouseUp() {
            isDragging = false;
            canvas.style.cursor = 'grab';
        }

        function handleTouchStart(e) {
            e.preventDefault();
            if (e.touches.length === 1) {
                isDragging = true;
                startX = e.touches[0].clientX;
                startY = e.touches[0].clientY;
            }
        }

        function handleTouchMove(e) {
            e.preventDefault();
            if (!isDragging || !currentImage || e.touches.length !== 1) return;
            
            const deltaX = e.touches[0].clientX - startX;
            const deltaY = e.touches[0].clientY - startY;
            
            rotation.y += deltaX * 0.5;
            rotation.x += deltaY * 0.3;
            
            rotation.x = Math.max(-60, Math.min(60, rotation.x));
            
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            
            render360();
        }

        function handleTouchEnd() {
            isDragging = false;
        }

        function render360() {
            if (!currentImage || !ctx) return;

            const canvasWidth = canvas.width;
            const canvasHeight = canvas.height;
            
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            
            const imgWidth = currentImage.width;
            const imgHeight = currentImage.height;
            
            const normalizedRotation = ((rotation.y % 360) + 360) % 360;
            
            const sourceX = (normalizedRotation / 360) * imgWidth;
            
            const viewWidth = canvasWidth * 1.2;
            const sourceWidth = (viewWidth / canvasWidth) * imgWidth;
            
            const verticalShift = (rotation.x / 60) * (imgHeight * 0.15);
            const sourceY = Math.max(0, Math.min(imgHeight - imgHeight * 0.7, (imgHeight * 0.15) + verticalShift));
            const sourceHeight = imgHeight * 0.7;
            
            if (sourceX + sourceWidth > imgWidth) {
                const firstPartWidth = imgWidth - sourceX;
                const secondPartWidth = sourceWidth - firstPartWidth;
                
                const firstCanvasWidth = (firstPartWidth / sourceWidth) * canvasWidth;
                const secondCanvasWidth = canvasWidth - firstCanvasWidth;
                
                ctx.drawImage(
                    currentImage,
                    sourceX, sourceY, firstPartWidth, sourceHeight,
                    0, 0, firstCanvasWidth, canvasHeight
                );
                
                ctx.drawImage(
                    currentImage,
                    0, sourceY, secondPartWidth, sourceHeight,
                    firstCanvasWidth, 0, secondCanvasWidth, canvasHeight
                );
            } else {
                ctx.drawImage(
                    currentImage,
                    sourceX, sourceY, sourceWidth, sourceHeight,
                    0, 0, canvasWidth, canvasHeight
                );
            }
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init360Viewer);
    } else {
        init360Viewer();
    }
})();
