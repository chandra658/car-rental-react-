
/* ==========================================
   KL DRIVENOW - CAR RENTAL SYSTEM
   COMPLETE EXPANDED CSS
   ========================================== */

/* ==========================================
   1. GLOBAL SETTINGS
   ========================================== */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'DM Sans', Arial, sans-serif;
    background: #ffffff;
    color: #111827;
    line-height: 1.6;
}

button,
input,
select {
    font: inherit;
}

button {
    cursor: pointer;
    transition: all 0.3s ease;
}

img {
    max-width: 100%;
    display: block;
}

#root {
    min-height: 100vh;
}

.app {
    min-height: 100vh;
}

.wrap {
    width: min(1160px, calc(100% - 40px));
    margin: auto;
}

/* ==========================================
   2. HEADER AND NAVIGATION
   ========================================== */

.header {
    height: 76px;
    background: #111827;
    color: white;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 3px 15px #0002;
}

.nav {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 25px;
}

/* Logo */

.brand {
    display: flex;
    align-items: center;
    gap: 10px;
    color: white;
    background: none;
    border: 0;
    font-size: 20px;
    font-weight: 800;
    text-align: left;
}

.brand b {
    color: #38bdf8;
}

.brand-icon {
    display: grid;
    place-items: center;
    background: #38bdf8;
    color: #071827;
    border-radius: 12px;
    width: 42px;
    height: 42px;
}

.brand-icon svg {
    width: 25px;
    height: 25px;
}

.brand small {
    display: block;
    font-size: 9px;
    letter-spacing: 2px;
    color: #9ca3af;
}

/* Navigation links */

.nav nav {
    display: flex;
    align-items: center;
    gap: 28px;
}

.nav nav button {
    border: 0;
    background: none;
    color: #d1d5db;
    font-size: 14px;
    font-weight: 600;
}

.nav nav button:hover {
    color: #38bdf8;
}

/* Navigation right side */

.nav-right {
    display: flex;
    align-items: center;
    gap: 14px;
}

.welcome {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #d1d5db;
    font-size: 14px;
}

.mobile-toggle {
    display: none;
    background: none;
    border: 0;
    color: white;
    font-size: 24px;
}

/* ==========================================
   3. BUTTON DESIGN
   ========================================== */

.primary {
    background: #0284c7;
    color: white;
    border: 0;
    border-radius: 9px;
    padding: 12px 18px;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    transition: all 0.3s ease;
}

.primary:hover {
    background: #0369a1;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px #0284c733;
}

.primary:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
}

.small {
    padding: 10px 14px;
    font-size: 13px;
}

.large {
    padding: 15px 22px;
    font-size: 15px;
}

.full {
    width: 100%;
}

.outline {
    background: transparent;
    border: 1px solid #64748b;
    color: white;
    border-radius: 8px;
    padding: 9px 13px;
    display: flex;
    align-items: center;
    gap: 6px;
}

.outline:hover {
    background: #ffffff15;
}

.text-btn {
    background: none;
    border: 0;
    color: #0284c7;
    font-weight: 700;
}

.text-btn:hover {
    color: #0369a1;
}

.back {
    display: block;
    margin-bottom: 28px;
    padding: 0;
    background: none;
    border: 0;
    color: #0284c7;
    font-weight: 700;
}

/* ==========================================
   4. HERO SECTION
   ========================================== */

.hero {
    background:
        linear-gradient(
            90deg,
            #0b1728 0%,
            #0b1728ed 44%,
            #0b172855 100%
        ),
        url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=85')
        center / cover;

    color: white;
    min-height: 570px;
    display: flex;
    align-items: center;
}

.hero-content {
    padding: 65px 0;
}

.eyebrow {
    color: #0284c7;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 2px;
}

.hero .eyebrow {
    color: #7dd3fc;
}

.hero h1 {
    font-size: clamp(42px, 6vw, 68px);
    font-weight: 800;
    line-height: 1.12;
    margin: 18px 0;
}

.hero h1 em {
    color: #38bdf8;
    font-style: normal;
}

.hero p {
    color: #cbd5e1;
    font-size: 17px;
    max-width: 490px;
    line-height: 1.7;
    margin-bottom: 28px;
}

/* Hero statistics */

.hero-stats {
    display: flex;
    gap: 50px;
    margin-top: 48px;
}

.hero-stats div {
    display: grid;
    gap: 4px;
}

.hero-stats b {
    font-size: 24px;
    font-weight: 800;
}

.hero-stats small {
    color: #cbd5e1;
    font-size: 12px;
}

/* ==========================================
   5. COMMON SECTIONS
   ========================================== */

.section {
    padding-top: 76px;
    padding-bottom: 76px;
}

.section h2,
.modal h2 {
    font-size: 34px;
    font-weight: 800;
    margin: 8px 0;
}

.section p {
    line-height: 1.7;
}

.section-head {
    display: flex;
    align-items: end;
    justify-content: space-between;
    margin-bottom: 28px;
}

.section-head p {
    color: #64748b;
}

.muted {
    color: #64748b;
}

.page-section {
    min-height: 65vh;
}

.narrow {
    max-width: 720px;
    min-height: 65vh;
    margin-left: auto;
    margin-right: auto;
}

/* ==========================================
   6. CAR GRID
   ========================================== */

.car-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}

/* ==========================================
   7. CAR CARD
   ========================================== */

.car-card {
    border: 1px solid #e5eaf0;
    border-radius: 15px;
    overflow: hidden;
    background: white;
    box-shadow: 0 7px 24px #0f172a0a;
    transition: all 0.3s ease;
}

.car-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 28px #0f172a18;
}

/* Car image */

.car-photo {
    height: 190px;
    position: relative;
    background: #e2e8f0;
    overflow: hidden;
}

.car-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.car-card:hover .car-photo img {
    transform: scale(1.06);
}

/* Car label */

.tag {
    position: absolute;
    top: 13px;
    left: 13px;
    background: white;
    color: #0284c7;
    border-radius: 20px;
    padding: 6px 11px;
    font-size: 11px;
    font-weight: 800;
}

/* Favorite button */

.favorite-btn {
    position: absolute;
    top: 12px;
    right: 12px;
    width: 38px;
    height: 38px;
    border: 0;
    border-radius: 50%;
    background: #11182799;
    display: grid;
    place-items: center;
}

.favorite-btn:hover {
    background: white;
    transform: scale(1.1);
}

/* Car information */

.car-info {
    padding: 18px;
}

.car-title {
    display: flex;
    justify-content: space-between;
    gap: 8px;
}

.car-title h3 {
    font-size: 17px;
    font-weight: 700;
    margin: 0 0 4px;
}

.car-title small {
    display: block;
    color: #64748b;
    font-size: 12px;
}

.price {
    font-weight: 800;
    color: #0284c7;
    white-space: nowrap;
}

.price small {
    font-size: 11px;
    color: #64748b;
    font-weight: 500;
}

/* Car rating */

.car-rating {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 10px;
    color: #475569;
    font-size: 13px;
    font-weight: 700;
}

/* Car specifications */

.specs {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #edf0f4;
    border-bottom: 1px solid #edf0f4;
    margin: 17px 0;
    padding: 12px 0;
    gap: 6px;
}

.specs span {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 11px;
    color: #64748b;
}

.specs svg {
    width: 14px;
    height: 14px;
}

/* Car features */

.car-features {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 15px;
}

.car-features span {
    background: #f1f5f9;
    color: #475569;
    border-radius: 5px;
    padding: 4px 7px;
    font-size: 10px;
}

/* ==========================================
   8. BENEFITS SECTION
   ========================================== */

.benefits {
    background: #f1f7fb;
    padding: 45px 0;
}

.benefit-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
}

.benefit-grid > div {
    padding: 10px;
}

.benefit-grid svg {
    color: #0284c7;
    width: 28px;
    height: 28px;
}

.benefit-grid h3 {
    font-size: 17px;
    font-weight: 700;
    margin: 12px 0 5px;
}

.benefit-grid p {
    color: #64748b;
    font-size: 14px;
    margin: 0;
}

/* ==========================================
   9. SEARCH AND FILTERS
   ========================================== */

.filters {
    display: flex;
    gap: 12px;
    margin: 25px 0;
}

.searchbox {
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px solid #dbe2ea;
    border-radius: 9px;
    padding: 0 13px;
    flex: 1;
    max-width: 420px;
}

.searchbox svg {
    color: #64748b;
}

.searchbox input {
    border: 0;
    outline: 0;
    padding: 12px 0;
    width: 100%;
    background: transparent;
}

.filters select {
    border: 1px solid #dbe2ea;
    border-radius: 9px;
    padding: 0 14px;
    background: white;
    color: #334155;
    outline-color: #38bdf8;
}

/* ==========================================
   10. BOOKING SECTION
   ========================================== */

.checkout-card {
    border: 1px solid #e2e8f0;
    border-radius: 15px;
    padding: 25px;
    margin-top: 25px;
    box-shadow: 0 8px 25px #0f172a0a;
    background: white;
}

.checkout-card h3 {
    margin-bottom: 15px;
    font-size: 19px;
}

/* Selected car */

.checkout-car {
    display: flex;
    gap: 17px;
    padding-bottom: 20px;
    border-bottom: 1px solid #e5e7eb;
    margin-bottom: 22px;
}

.checkout-car img {
    width: 150px;
    height: 100px;
    object-fit: cover;
    border-radius: 10px;
}

.checkout-car b {
    font-size: 18px;
    font-weight: 700;
}

.checkout-car p {
    color: #64748b;
    font-size: 13px;
}

.checkout-car strong {
    color: #0284c7;
}

/* Booking form */

.form-grid {
    display: grid;
    gap: 18px;
}

.form-grid label,
.modal label {
    display: grid;
    gap: 7px;
    font-size: 13px;
    font-weight: 700;
    color: #334155;
}

.form-grid label svg {
    display: inline;
    width: 15px;
    height: 15px;
    vertical-align: middle;
    color: #0284c7;
}

.form-grid input,
.form-grid select,
.modal input {
    border: 1px solid #dbe2ea;
    border-radius: 8px;
    padding: 12px;
    outline-color: #38bdf8;
    width: 100%;
    background: white;
    color: #111827;
}

/* ==========================================
   11. PAYMENT SECTION
   ========================================== */

.summary-line {
    display: flex;
    justify-content: space-between;
    padding: 12px 0;
    color: #475569;
    gap: 12px;
}

.summary-line.total {
    font-size: 19px;
    color: #111827;
    font-weight: 800;
}

.checkout-card hr {
    border: 0;
    border-top: 1px solid #e2e8f0;
    margin: 12px 0;
}

/* Payment options */

.payment-options {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin: 14px 0;
}

.payment-options button {
    background: white;
    border: 1px solid #cbd5e1;
    border-radius: 8px;
    padding: 11px 14px;
    color: #334155;
}

.payment-options button:hover {
    border-color: #0284c7;
}

.payment-options button.selected {
    border: 2px solid #0284c7;
    background: #f0f9ff;
    color: #0369a1;
}

/* ==========================================
   12. SUCCESS PAGE
   ========================================== */

.center {
    text-align: center;
    padding-top: 100px;
}

.success-icon {
    color: #16a34a;
    margin-bottom: 18px;
}

.success-icon svg {
    width: 65px;
    height: 65px;
}

.center h2 {
    margin: 15px 0;
}

.center p {
    margin-bottom: 25px;
}

/* ==========================================
   13. EMPTY STATES
   ========================================== */

.empty {
    padding: 35px;
    text-align: center;
    border: 1px dashed #cbd5e1;
    border-radius: 12px;
    color: #64748b;
    background: #fafcff;
}

.empty svg {
    margin: 0 auto 12px;
    color: #0284c7;
}

.empty p {
    margin: 10px 0 15px;
}

/* ==========================================
   14. BOOKING HISTORY
   ========================================== */

.booking-list {
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    overflow: hidden;
    background: white;
}

.booking-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px;
    border-bottom: 1px solid #e2e8f0;
    gap: 15px;
}

.booking-row:last-child {
    border: 0;
}

.booking-row small {
    display: block;
    color: #64748b;
    font-size: 12px;
    margin-top: 5px;
}

.booking-right {
    text-align: right;
    display: grid;
    gap: 7px;
}

.confirmed {
    color: #15803d;
    background: #dcfce7;
    border-radius: 20px;
    padding: 4px 9px;
    font-size: 11px;
    text-align: center;
}

.cancelled {
    color: #b91c1c;
    background: #fee2e2;
    border-radius: 20px;
    padding: 4px 9px;
    font-size: 11px;
    text-align: center;
}

/* ==========================================
   15. ADMIN DASHBOARD
   ========================================== */

.admin-stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
    margin: 25px 0;
}

.admin-stats div {
    padding: 20px;
    background: #f1f7fb;
    border-radius: 12px;
    display: grid;
    gap: 8px;
    transition: all 0.3s ease;
}

.admin-stats div:hover {
    transform: translateY(-4px);
    background: #e0f2fe;
}

.admin-stats svg {
    color: #0284c7;
    width: 25px;
    height: 25px;
}

.admin-stats small {
    color: #64748b;
}

.admin-stats b {
    font-size: 25px;
    font-weight: 800;
}

/* Admin inventory */

.admin-list {
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    margin-bottom: 30px;
    overflow: hidden;
}

.admin-list > div {
    padding: 13px 16px;
    border-bottom: 1px solid #e2e8f0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
}

.admin-list > div:last-child {
    border-bottom: 0;
}

.admin-list small {
    display: block;
    color: #64748b;
}

/* Admin action buttons */

.admin-actions {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
}

.icon-btn {
    border: 1px solid #cbd5e1;
    background: white;
    color: #334155;
    border-radius: 7px;
    padding: 7px 10px;
    font-size: 12px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
}

.icon-btn:hover {
    background: #f1f5f9;
    border-color: #0284c7;
    color: #0284c7;
}

/* ==========================================
   16. LOGIN AND SIGNUP MODAL
   ========================================== */

.modal-backdrop {
    position: fixed;
    inset: 0;
    background: #0f172acc;
    z-index: 200;
    display: grid;
    place-items: center;
    padding: 20px;
    overflow-y: auto;
}

.modal {
    width: min(440px, 100%);
    background: white;
    border-radius: 16px;
    padding: 30px;
    position: relative;
    box-shadow: 0 20px 60px #0004;
    animation: modalOpen 0.3s ease;
}

@keyframes modalOpen {
    from {
        opacity: 0;
        transform: translateY(20px) scale(0.97);
    }

    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

.modal-close {
    position: absolute;
    right: 17px;
    top: 17px;
    border: 0;
    background: none;
    color: #64748b;
}

.modal-close:hover {
    color: #dc2626;
    transform: rotate(90deg);
}

.modal form {
    display: grid;
    gap: 15px;
    margin-top: 20px;
}

.modal h2 {
    font-size: 25px;
}

/* ==========================================
   17. TOAST NOTIFICATION
   ========================================== */

.toast {
    position: fixed;
    right: 20px;
    top: 90px;
    z-index: 300;
    background: #ecfdf5;
    color: #166534;
    padding: 13px 18px;
    border-radius: 9px;
    display: flex;
    gap: 9px;
    align-items: center;
    box-shadow: 0 5px 20px #0002;
    animation: toastOpen 0.3s ease;
}

@keyframes toastOpen {
    from {
        opacity: 0;
        transform: translateX(30px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

/* ==========================================
   18. FOOTER
   ========================================== */

footer {
    background: #f8fafc;
    border-top: 1px solid #e5eaf0;
}

.footer-inner {
    min-height: 95px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
}

.footer-brand {
    color: #111827;
    font-size: 17px;
}

.footer-brand svg {
    color: #0284c7;
}

.footer-inner p,
.footer-inner > span {
    font-size: 12px;
    color: #64748b;
}

/* ==========================================
   19. ANIMATIONS
   ========================================== */

.car-card,
.admin-stats div,
.benefit-grid > div {
    animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(12px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* ==========================================
   20. TABLET RESPONSIVE DESIGN
   ========================================== */

@media (max-width: 1000px) {

    .car-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .admin-stats {
        grid-template-columns: repeat(2, 1fr);
    }

    .nav nav {
        gap: 14px;
    }

    .hero {
        min-height: 520px;
    }

}

/* ==========================================
   21. MOBILE RESPONSIVE DESIGN
   ========================================== */

@media (max-width: 650px) {

    .wrap {
        width: min(100% - 28px, 1160px);
    }

    /* Mobile header */

    .header {
        height: 66px;
    }

    .mobile-toggle {
        display: block;
        margin-left: auto;
    }

    .nav {
        gap: 10px;
    }

    .nav nav {
        display: none;
        position: absolute;
        top: 66px;
        left: 0;
        right: 0;
        background: #111827;
        padding: 18px;
        flex-direction: column;
        align-items: flex-start;
        gap: 18px;
    }

    .nav nav.open {
        display: flex;
    }

    .nav-right {
        gap: 6px;
    }

    .welcome {
        display: none;
    }

    .brand {
        font-size: 17px;
    }

    .brand-icon {
        width: 36px;
        height: 36px;
    }

    /* Mobile hero */

    .hero {
        min-height: 520px;
    }

    .hero-content {
        padding: 45px 0;
    }

    .hero h1 {
        font-size: 42px;
    }

    .hero-stats {
        gap: 18px;
        flex-wrap: wrap;
    }

    .hero-stats b {
        font-size: 20px;
    }

    .hero-stats small {
        font-size: 11px;
    }

    /* Mobile grids */

    .car-grid,
    .benefit-grid {
        grid-template-columns: 1fr;
    }

    .section {
        padding-top: 48px;
        padding-bottom: 48px;
    }

    .section-head {
        align-items: flex-start;
        gap: 12px;
    }

    .section h2 {
        font-size: 28px;
    }

    /* Mobile filters */

    .filters {
        flex-direction: column;
    }

    .searchbox {
        max-width: none;
        padding-left: 10px;
    }

    .filters select {
        height: 43px;
    }

    /* Mobile checkout */

    .checkout-card {
        padding: 17px;
    }

    .checkout-car img {
        width: 110px;
        height: 85px;
    }

    /* Mobile admin */

    .admin-stats {
        grid-template-columns: 1fr;
    }

    .admin-list > div {
        align-items: flex-start;
        flex-direction: column;
    }

    .admin-actions {
        width: 100%;
    }

    /* Mobile footer */

    .footer-inner {
        padding: 20px 0;
        flex-wrap: wrap;
        justify-content: flex-start;
    }

    .footer-inner p {
        width: 100%;
        order: 3;
    }

    /* Mobile bookings */

    .booking-row {
        align-items: flex-start;
    }

    .booking-row small {
        max-width: 220px;
    }

    /* Mobile modal */

    .modal {
        padding: 24px;
    }

}

/* ==========================================
   22. SMALL MOBILE DEVICES
   ========================================== */

@media (max-width: 380px) {

    .hero h1 {
        font-size: 34px;
    }

    .hero-stats {
        gap: 12px;
    }

    .car-title {
        flex-direction: column;
    }

    .price {
        margin-top: 5px;
    }

    .checkout-car {
        flex-direction: column;
    }

    .checkout-car img {
        width: 100%;
        height: 150px;
    }

    .payment-options {
        flex-direction: column;
    }

    .payment-options button {
        width: 100%;
    }

}

/* ==========================================
   23. ACCESSIBILITY AND FINAL STYLES
   ========================================== */

button:focus-visible,
input:focus-visible,
select:focus-visible {
    outline: 3px solid #38bdf8;
    outline-offset: 3px;
}

::selection {
    background: #bae6fd;
    color: #0c4a6e;
}

@media (prefers-reduced-motion: reduce) {

    *,
    *::before,
    *::after {
        scroll-behavior: auto !important;
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }

}
