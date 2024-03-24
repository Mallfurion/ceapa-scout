<template>
  <main class="main-wrapper">
    <!-- <div class="title">
      <h1>⚜️ C.E.A.P.A ⚜️</h1>
      <h3>Clujeni Entuziasmați Adesea Plecați Aiurea</h3>
    </div> -->
    <!-- Nav -->
    <div class="flex">
      <UHorizontalNavigation :links="links" class="justify-center" />
      <DarkModeSwitch />
    </div>
    <!-- Content -->
    <main class="content">
      <slot />
    </main>
  </main>
</template>

<script setup>
const links = [
  { to: '/', label: 'Home' },
  { to: '/calendar', label: 'Calendar' },
  { to: '/regulament', label: 'Regulament' },
  {
    to: 'https://roversoncr.slack.com/',
    label: 'Slack',
    badge: { label: 'Open', color: 'green', variant: 'solid' },
    target: '_blank',
  },
];
</script>
