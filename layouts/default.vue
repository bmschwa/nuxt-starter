<template>
  <div class="min-h-screen bg-gray-100 flex flex-col">
    <Header />
    <main class="flex-grow flex items-center justify-center">
      <slot />
    </main>
    <Footer />
  </div>
</template>
