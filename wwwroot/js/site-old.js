// Enhanced sidebar functionality with animations
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('mainContent');
    const sidebarToggle = document.getElementById('sidebarToggle');
    
    // Initialize sidebar state
    let sidebarCollapsed = false;
    
    // Sidebar toggle with smooth animation
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function(e) {
            e.preventDefault();
            toggleSidebar();
        });
    }
    
    function toggleSidebar() {
        sidebarCollapsed = !sidebarCollapsed;
        
        if (sidebarCollapsed) {
            sidebar.classList.add('collapsed');
            mainContent.classList.add('expanded');
            
            // Animate sidebar items
            const navItems = sidebar.querySelectorAll('.nav-item');
            navItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '0.5';
                    item.style.transform = 'translateX(-10px)';
                }, index * 50);
            });
        } else {
            sidebar.classList.remove('collapsed');
            mainContent.classList.remove('expanded');
            
            // Animate sidebar items back
            const navItems = sidebar.querySelectorAll('.nav-item');
            navItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateX(0)';
                }, index * 50);
            });
        }
        
        // Store state in localStorage
        localStorage.setItem('sidebarCollapsed', sidebarCollapsed);
    }
    
    // Restore sidebar state from localStorage
    const savedState = localStorage.getItem('sidebarCollapsed');
    if (savedState === 'true') {
        toggleSidebar();
    }
    
    // Enhanced submenu functionality
    window.toggleSubmenu = function(submenuId) {
        const submenu = document.getElementById(submenuId);
        const parentLink = submenu.previousElementSibling;
        const chevron = parentLink.querySelector('.ti-chevron-down');
        
        if (submenu.classList.contains('show')) {
            // Hide submenu
            submenu.style.maxHeight = submenu.scrollHeight + 'px';
            submenu.offsetHeight; // Force reflow
            submenu.style.maxHeight = '0';
            submenu.style.opacity = '0';
            
            setTimeout(() => {
                submenu.classList.remove('show');
                submenu.style.maxHeight = '';
                submenu.style.opacity = '';
            }, 300);
            
            if (chevron) {
                chevron.style.transform = 'rotate(0deg)';
            }
        } else {
            // Show submenu
            submenu.classList.add('show');
            submenu.style.maxHeight = '0';
            submenu.style.opacity = '0';
            
            const height = submenu.scrollHeight;
            submenu.style.maxHeight = height + 'px';
            submenu.style.opacity = '1';
            
            setTimeout(() => {
                submenu.style.maxHeight = '';
            }, 300);
            
            if (chevron) {
                chevron.style.transform = 'rotate(180deg)';
            }
        }
    };
    
    // Add hover effects to nav items
    const navLinks = document.querySelectorAll('.sidebar-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.backgroundColor = '#e9ecef';
                this.style.transform = 'translateX(5px)';
                this.style.boxShadow = '2px 0 8px rgba(0,0,0,0.1)';
            }
        });
        
        link.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.backgroundColor = '';
                this.style.transform = '';
                this.style.boxShadow = '';
            }
        });
    });
    
    // Active link highlighting
    function setActiveLink() {
        const currentPath = window.location.pathname;
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && (currentPath === href || currentPath.startsWith(href + '/'))) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    
    setActiveLink();
    
    // Mobile responsive behavior
    function handleResize() {
        if (window.innerWidth <= 768) {
            sidebar.classList.add('mobile');
            mainContent.style.marginLeft = '0';
        } else {
            sidebar.classList.remove('mobile');
            sidebar.classList.remove('show');
            if (!sidebarCollapsed) {
                mainContent.style.marginLeft = '280px';
            }
        }
    }
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    // Close sidebar on mobile when clicking outside
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 768) {
            if (!sidebar.contains(event.target) && 
                !sidebarToggle.contains(event.target) && 
                sidebar.classList.contains('show')) {
                sidebar.classList.remove('show');
            }
        }
    });
    
    // Add loading animation for cards
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease-in-out';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    // Add pulse animation to status dots
    const statusDots = document.querySelectorAll('.status-dot-animated');
    statusDots.forEach(dot => {
        setInterval(() => {
            dot.style.transform = 'scale(1.2)';
            setTimeout(() => {
                dot.style.transform = 'scale(1)';
            }, 200);
        }, 2000);
    });
    
    // Progress bar animation
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        
        setTimeout(() => {
            bar.style.transition = 'width 1s ease-in-out';
            bar.style.width = width;
        }, 500);
    });
});

// Utility functions
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
    notification.style.top = '80px';
    notification.style.right = '20px';
    notification.style.zIndex = '9999';
    notification.style.minWidth = '300px';
    
    notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 5000);
}

function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start).toLocaleString();
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target.toLocaleString();
        }
    }
    
    updateCounter();
}
