<template>
    <nav class="nav-bar">
        <div class="left-section">
            <button class="dropdown-button" @click="toggleDropdown">☰</button>
        </div>

        <div class="logo-container">
            <a href="/">
                <img src="/bildites/Logo_Arva.png" class="logoarva" alt="Logo" />
            </a>
        </div>

        <div class="right-section">
            <button class="basket-button" @click="toggleCart">
                <img src="/bildites/basket_icon.png" alt="Basket" class="basket-icon" />
                <span v-if="cartItemCount > 0" class="cart-count">{{ cartItemCount }}</span>
            </button>

            <div class="auth-buttons">
                <a href="/SignUp"><button class="signup-button">Sign Up</button></a>
                <a href="/LogIn"><button class="login-button">Log In</button></a>
            </div>
        </div>
    </nav>

    <transition name="dropdown-slide">
        <div v-if="isDropdownOpen" class="dropdown-menu">
            <button class="close-button" @click="toggleDropdown">✖</button>

            <div class="categories">
                <a href="#" class="category-link" @click="toggleCategory('woman')" :class="{ 'active': activeCategory === 'woman' }">
                    WOMAN
                </a>
                <a href="#" class="category-link" @click="toggleCategory('men')" :class="{ 'active': activeCategory === 'men' }">
                    MEN
                </a>
                <a href="#" class="category-link" @click="toggleCategory('accessories')" :class="{ 'active': activeCategory === 'accessories' }">
                    ACCESSORIES
                </a>
            </div>

            <div class="menu-links">
                <h3>FEATURED PRODUCTS</h3>
                <a href="#" class="menu-link">Top Picks</a>
                <a href="#" class="menu-link">New Arrivals</a>
                <a href="#" class="menu-link">Best Sellers</a>
                <a href="#" class="menu-link">Limited Edition</a>
            </div>

            <div class="menu-links">
                <h3>CUSTOMER SUPPORT</h3>
                <a href="#" class="menu-link">FAQ</a>
                <a href="#" class="menu-link">Contact Us</a>
                <a href="#" class="menu-link">Returns</a>
                <a href="#" class="menu-link">Shipping Info</a>
            </div>
        </div>
    </transition>

    <div v-if="isDropdownOpen" class="blur-background"></div>

    <!-- Cart Modal -->
    <transition name="modal-fade">
        <div v-if="isCartVisible" class="cart-modal">
            <h2>Your Cart</h2>
            <p>Items in Cart: {{ cartItemCount }}</p>
            <button @click="toggleCart">Close</button>
        </div>
    </transition>
</template>

<script setup lang="ts">
import { ref } from "vue";

// State variables
const isDropdownOpen = ref(false);
const activeCategory = ref('');
const cartItemCount = ref(0);
const isCartVisible = ref(false);

// Toggle dropdown menu visibility
function toggleDropdown() {
    isDropdownOpen.value = !isDropdownOpen.value;
}

// Toggle category (woman or men)
function toggleCategory(category: 'woman' | 'men' | 'accessories') {
    activeCategory.value = category;
}


// Toggle the visibility of the cart modal
function toggleCart() {
    isCartVisible.value = !isCartVisible.value;
}
</script>

<style scoped>

</style>
