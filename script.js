document.addEventListener('DOMContentLoaded', function() {
    // Initial animations on page load
    // Header animation
    anime({
      targets: 'h1',
      opacity: [0, 1],
      translateY: [-50, 0],
      easing: 'easeOutExpo',
      duration: 1200
    });
    
    // Section headers animation
    anime({
      targets: 'h2',
      opacity: [0, 1],
      translateY: [-30, 0],
      delay: anime.stagger(200, {start: 300}),
      easing: 'easeOutExpo',
      duration: 1000
    });
    
    // Logo animation
    anime({
      targets: '#animated-logo path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 2000,
      delay: function(el, i) { return i * 250 }
    });
    
    // ========== BUTTON ANIMATIONS ==========
    
    // Animate buttons entrance
    anime({
      targets: '.animated-button',
      opacity: [0, 1],
      translateY: [20, 0],
      delay: anime.stagger(100, {start: 500}),
      easing: 'easeOutExpo',
      duration: 800
    });
    
    // Ripple button effect
    document.querySelector('.ripple-button').addEventListener('click', function(e) {
      const button = this;
      const circle = document.createElement('div');
      circle.classList.add('ripple-circle');
      
      const x = e.clientX - button.getBoundingClientRect().left;
      const y = e.clientY - button.getBoundingClientRect().top;
      
      circle.style.left = x + 'px';
      circle.style.top = y + 'px';
      
      button.appendChild(circle);
      
      anime({
        targets: circle,
        scale: 15,
        opacity: [0.8, 0],
        duration: 800,
        easing: 'easeOutExpo',
        complete: function() {
          circle.remove();
        }
      });
    });
    
    // Border button animation
    document.querySelector('.border-button').addEventListener('mouseenter', function() {
      anime({
        targets: this,
        borderColor: ['#00f7ff', '#ff416c', '#00f7ff'],
        duration: 1500,
        easing: 'easeInOutQuad'
      });
    });
    
    // Icon button animation
    const iconButton = document.querySelector('.icon-button');
    const iconSvg = iconButton.querySelector('svg');
    
    iconButton.addEventListener('mouseenter', function() {
      anime({
        targets: iconSvg,
        width: 20,
        easing: 'easeOutExpo',
        duration: 300
      });
    });
    
    iconButton.addEventListener('mouseleave', function() {
      anime({
        targets: iconSvg,
        width: 0,
        easing: 'easeOutExpo',
        duration: 300
      });
    });
    
    // ========== LOADING ANIMATIONS ==========
    
    // Animate loading items entrance
    anime({
      targets: '.loading-item',
      opacity: [0, 1],
      translateY: [20, 0],
      delay: anime.stagger(100, {start: 700}),
      easing: 'easeOutExpo',
      duration: 800
    });
    
    // Circle loading animation
    anime({
      targets: '.circle-loading',
      rotateZ: 360,
      easing: 'linear',
      loop: true,
      duration: 1500
    });
    
    // Dot loading animation
    anime({
      targets: '.dot',
      translateY: [0, -15, 0],
      duration: 1500,
      loop: true,
      delay: anime.stagger(200),
      easing: 'easeInOutSine'
    });
    
    // Eye drawing animation
    function animateEye() {
      anime({
        targets: '#eye-path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 2000,
        complete: function() {
          anime({
            targets: '#eye-pupil',
            opacity: [0, 1],
            r: [0, 5],
            duration: 1000,
            easing: 'easeOutExpo'
          });
        }
      });
    }
    
    animateEye();
    
    // Eye pupil follows cursor
    document.addEventListener('mousemove', function(e) {
      const eyeContainer = document.querySelector('.eye-container');
      if (!eyeContainer) return;
      
      const eyeRect = eyeContainer.getBoundingClientRect();
      const eyeCenterX = eyeRect.left + eyeRect.width / 2;
      const eyeCenterY = eyeRect.top + eyeRect.height / 2;
      
      // Calculate distance and angle
      const dx = e.clientX - eyeCenterX;
      const dy = e.clientY - eyeCenterY;
      const distance = Math.min(15, Math.sqrt(dx * dx + dy * dy) / 10);
      const angle = Math.atan2(dy, dx);
      
      // Set pupil position
      const pupil = document.querySelector('#eye-pupil');
      if (pupil) {
        const pupilX = 100 + Math.cos(angle) * distance;
        const pupilY = 80 + Math.sin(angle) * distance;
        
        anime({
          targets: pupil,
          cx: pupilX,
          cy: pupilY,
          duration: 300,
          easing: 'easeOutCubic'
        });
      }
    });
    
    // ========== CARD TRANSITIONS ==========
    
    // Animate cards entrance with stagger
    anime({
      targets: '.card',
      opacity: [0, 1],
      translateY: [50, 0],
      delay: anime.stagger(200, {start: 900}),
      easing: 'easeOutExpo',
      duration: 800
    });
    
    // Card hover animations
    document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('mouseenter', function() {
        anime({
          targets: this.querySelector('.card-icon'),
          scale: [1, 1.2],
          rotateY: 180,
          duration: 800,
          easing: 'easeOutElastic(1, .5)'
        });
        
        anime({
          targets: this,
          translateY: -10,
          boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
          duration: 500,
          easing: 'easeOutCubic'
        });
      });
      
      card.addEventListener('mouseleave', function() {
        anime({
          targets: this.querySelector('.card-icon'),
          scale: [1.2, 1],
          rotateY: 0,
          duration: 600,
          easing: 'easeOutElastic(1, .5)'
        });
        
        anime({
          targets: this,
          translateY: 0,
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
          duration: 500,
          easing: 'easeOutCubic'
        });
      });
    });
    
    // ========== TEXT ANIMATIONS ==========
    
    // Animate text container
    anime({
      targets: '.text-effects-container',
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeOutExpo',
      delay: 1100
    });
    
    // Animate headline characters with stagger
    anime({
      targets: '.text-effect-chars',
      opacity: [0, 1],
      translateY: [-50, 0],
      easing: 'easeOutExpo',
      duration: 1200,
      delay: anime.stagger(100, {start: 1300})
    });
    
    // Animate paragraph words with stagger
    anime({
      targets: '.text-effect-words',
      opacity: [0, 1],
      translateX: [-20, 0],
      easing: 'easeOutExpo',
      duration: 800,
      delay: anime.stagger(80, {start: 1800})
    });
    
    // Shuffle animation for headline on hover
    const textEffectHeadline = document.querySelector('.text-effect-headline');
    if (textEffectHeadline) {
      textEffectHeadline.addEventListener('mouseenter', function() {
        anime({
          targets: '.text-effect-chars',
          translateY: function() { return anime.random(-15, 15); },
          translateX: function() { return anime.random(-10, 10); },
          rotate: function() { return anime.random(-15, 15); },
          duration: 600,
          easing: 'easeOutElastic(1, .6)',
          delay: anime.stagger(20)
        });
      });
      
      textEffectHeadline.addEventListener('mouseleave', function() {
        anime({
          targets: '.text-effect-chars',
          translateY: 0,
          translateX: 0,
          rotate: 0,
          duration: 800,
          easing: 'easeOutElastic(1, .5)'
        });
      });

      // Animation for the portfolio button
      const portfolioFab = document.querySelector('.portfolio-fab');
    
      // Make the button rotate slightly when page loads
      anime({
        targets: '.portfolio-fab',
        rotate: [0, 5, -5, 0],
        duration: 1800,
        easing: 'easeInOutBack',
        delay: 2000
      });
      
      // Fun spin animation on click
      portfolioFab.addEventListener('click', function() {
        anime({
          targets: this,
          rotate: 360,
          scale: [1, 1.2, 1],
          duration: 800,
          easing: 'easeInOutBack'
        });
        
        // Show info panel on click for mobile too
        const infoPanel = document.querySelector('.portfolio-info');
        infoPanel.style.opacity = "1";
        infoPanel.style.transform = "translateX(0)";
        infoPanel.style.pointerEvents = "all";
        
        // Hide panel after some time
        setTimeout(() => {
          infoPanel.style.opacity = "";
          infoPanel.style.transform = "";
          infoPanel.style.pointerEvents = "";
        }, 5000);
      });
    }
  });