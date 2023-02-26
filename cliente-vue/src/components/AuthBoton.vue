<template>
    
    <div class="dropdown">
      <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
        <strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">hacer</font></font></strong>
      </a>
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
        <li><RouterLink class="dropdown-item" to="/dashboard"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Dashboard</font></font></RouterLink></li>
        <li><RouterLink class="dropdown-item" to="/dashboard/newproyect"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nuevo proyecto...</font></font></RouterLink></li>
        <li><RouterLink class="dropdown-item" to="/dashboard/settings"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Ajustes</font></font></RouterLink></li>
        <li><RouterLink class="dropdown-item" to="/dashboard/perfil"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Perfil</font></font></RouterLink></li>
        <li><hr class="dropdown-divider"></li>
        <li><RouterLink class="dropdown-item" to="/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">desconectar</font></font></RouterLink></li>
      </ul>
    </div>
    
</template>

<style scoped>
    .dropdown{
        width: 10%;
    }
</style>