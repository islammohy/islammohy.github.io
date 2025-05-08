/*
* Main JavaScript for Portfolio Website
* For: Islam Mohy Eldyn Mohamed
*/

$(document).ready(function() {
    // Smooth scrolling for navigation links
    $('a.nav-link, .hero-buttons a, a.quick-link').on('click', function(e) {
        if (this.hash !== '') {
            e.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70
            }, 800);
        }
    });

    // Add active class to nav items when scrolling
    $(window).scroll(function() {
        const scrollDistance = $(window).scrollTop();
        
        // Show/hide back to top button
        if (scrollDistance > 300) {
            $('.back-to-top').addClass('active');
        } else {
            $('.back-to-top').removeClass('active');
        }
        
        // Assign active class to nav items
        $('section').each(function(i) {
            if ($(this).position().top - 100 <= scrollDistance) {
                $('.navbar-nav .nav-item .nav-link.active').removeClass('active');
                $('.navbar-nav .nav-item .nav-link').eq(i).addClass('active');
            }
        });
    });

    // Back to top button
    $('.back-to-top').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    // Navbar background change on scroll
    $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
            $('.navbar').css('background-color', '#fff').css('box-shadow', '0 2px 10px rgba(0, 0, 0, 0.1)');
        } else {
            $('.navbar').css('background-color', '#fff').css('box-shadow', 'none');
        }
    });

    // Form submission (for demonstration)
   /* $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = $('#name').val();
        const email = $('#email').val();
        const message = $('#message').val();
        
        // Simple validation
        if (name && email && message) {
            // In a real application, you would send this data to a server
            alert('Thank you for your message! This is a demo form, so no message was actually sent.');
            
            // Clear form
            $('#name').val('');
            $('#email').val('');
            $('#message').val('');
        } else {
            alert('Please fill in all fields.');
        }
    });*/

    // Add subtle animations to elements when they come into view
    const animateElements = function() {
        $('.skill-card, .project-card, .cert-card, .publication-item, .interests-card, .quick-link').each(function() {
            const position = $(this).offset().top;
            const scroll = $(window).scrollTop();
            const windowHeight = $(window).height();
            
            if (scroll + windowHeight > position + 100) {
                $(this).addClass('animated');
            }
        });
    };
    
    // Run animation function on load and scroll
    $(window).on('load scroll', animateElements);
});
