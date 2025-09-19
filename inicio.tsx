<?php
// ibec/inicio.php

session_start();

if (!isset($_SESSION['usuario_id'])) {
    header("Location: login.php");
    exit;
}

$nombres = $_SESSION['nombres'] ?? 'Usuario';
$apellidos = $_SESSION['apellidos'] ?? '';
$rol = $_SESSION['rol'] ?? '';
$codigo = $_SESSION['codigo_estudiante'] ?? null;

$nombre_completo = trim("$nombres $apellidos");
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Bienvenido al Sistema IBEC</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.0/font/bootstrap-icons.css" rel="stylesheet">
    <style>
        body { background-color: #f8f9fa; }
        .sidebar { min-height: 100vh; background-color: #2c3e50; color: white; }
        .sidebar .nav-link { color: #bdc3c7; }
        .sidebar .nav-link:hover { background-color: #34495e; }
        .sidebar .nav-link.active { background-color: #3498db; color: white; border-radius: 8px; margin: 0 10px; }
        .main-content { padding: 20px; }
        .footer { margin-top: 50px; color: #95a5a6; font-size: 0.9em; }
        .card-quick { 
            transition: transform 0.2s, box-shadow 0.2s; 
            cursor: pointer; 
            height: 100%; 
            border: none; 
            border-radius: 12px;
        }
        .card-quick:hover { 
            transform: translateY(-5px); 
            box-shadow: 0 10px 20px rgba(0,0,0,0.15); 
        }
        .card-quick .card-body { 
            text-align: center; 
            padding: 25px 15px; 
        }
        .card-quick i { 
            font-size: 2.5rem; 
            margin-bottom: 15px; 
        }
        .card-control { 
            background: linear-gradient(135deg, #6f42c1, #49278f); 
            color: white; 
        }
        .card-control:hover { 
            background: linear-gradient(135deg, #5a34a1, #3a1f70); 
        }
    </style>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <!-- Menú Lateral -->
            <nav class="col-md-3 col-lg-2 sidebar">
                <div class="position-sticky pt-3">
                    <h5 class="text-white text-center py-3 border-bottom">IBEC</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <a class="nav-link active" href="inicio.php">
                                <i class="bi bi-house-door"></i> Inicio
                            </a>
                        </li>

                        <?php if ($rol === 'admin'): ?>
                            <li class="nav-item">
                                <a class="nav-link" href="admin/usuarios/gestionar.php">
                                    <i class="bi bi-people"></i> Gestionar Usuarios
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="admin/carreras/gestionar.php">
                                    <i class="bi bi-mortarboard"></i> Gestionar Carreras
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="admin/ciclos/gestionar.php">
                                    <i class="bi bi-calendar-event"></i> Gestionar Ciclos
                                </a>
                            </li>
                        <?php endif; ?>

                        <?php if ($rol === 'admin' || $rol === 'admin_academico'): ?>
                            <li class="nav-item">
                                <a class="nav-link" href="admin/academico/asignaturas/gestionar.php">
                                    <i class="bi bi-book"></i> Gestionar Asignaturas
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="admin/academico/grupos/crear.php">
                                    <i class="bi bi-people-fill"></i> Gestionar Grupos
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="admin/academico/matriculas/gestionar.php">
                                    <i class="bi bi-pencil-square"></i> Gestionar Matrículas
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="admin/academico/control/inicio.php">
                                    <i class="bi bi-journal-check"></i> Control Académico
                                </a>
                            </li>
                        <?php endif; ?>

                        <?php if ($rol === 'profesor'): ?>
                            <li class="nav-item">
                                <a class="nav-link" href="profesor/grupos.php">
                                    <i class="bi bi-people-fill"></i> Mis Grupos
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="profesor/asistencias.php">
                                    <i class="bi bi-check-circle"></i> Tomar Asistencias
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="profesor/notas.php">
                                    <i class="bi bi-clipboard2-check"></i> Ingresar Notas
                                </a>
                            </li>
                        <?php endif; ?>

                        <?php if ($rol === 'estudiante'): ?>
    <li class="nav-item">
        <a class="nav-link" href="estudiante/inicio.php">
            <i class="bi bi-house-door"></i> Inicio
        </a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="estudiante/historial.php">
            <i class="bi bi-journal-medical"></i> Mi Historial Académico
        </a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="estudiante/certificados.php">
            <i class="bi bi-award"></i> Mis Certificados
        </a>
    </li>
<?php endif; ?>

                        <li class="nav-item mt-auto">
                            <a class="nav-link text-danger" href="logout.php">
                                <i class="bi bi-box-arrow-right"></i> Cerrar Sesión
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <!-- Contenido Principal -->
            <main class="col-md-9 ms-sm-auto col-lg-10 main-content">
                <!-- Título y sesión en una sola línea -->
                <div class="row g-4 mb-4">
                    <!-- Sección de Título -->
                    <div class="col-md-7">
                        <div class="card bg-primary text-white h-100" style="border-radius: 12px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
                            <div class="card-body d-flex align-items-center">
                                <div>
                                    <h2 class="mb-1"><i class="bi bi-journal-code"></i> Bienvenido al Sistema IBEC</h2>
                                    <p class="mb-0 opacity-75">Gestión Académica - Instituto Bíblico El Camino</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Sección de Sesión Iniciada -->
                    <div class="col-md-5">
                        <div class="card bg-light h-100" style="border-radius: 12px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
                            <div class="card-body">
                                <h5 class="text-center mb-3"><i class="bi bi-person-check text-success"></i> Sesión Iniciada</h5>
                                <div class="text-center">
                                    <p class="mb-1"><strong><?= htmlspecialchars($nombre_completo) ?></strong></p>
                                    <p class="mb-0 text-muted small">
                                        <i class="bi bi-shield-check"></i> 
                                        <?= $rol === 'admin' ? 'Administrador' : 
                                           ($rol === 'admin_academico' ? 'Administración Académica' : 
                                           ucfirst(str_replace('_', ' ', $rol))) ?>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Cuadritos de acceso rápido (solo para admin y admin_academico) -->
                <?php if ($rol === 'admin' || $rol === 'admin_academico'): ?>
                    <div class="row g-4 justify-content-center">
                        <?php if ($rol === 'admin'): ?>
                            <div class="col-md-6 col-lg-4">
                                <a href="admin/usuarios/gestionar.php" class="text-decoration-none">
                                    <div class="card card-quick bg-success text-white">
                                        <div class="card-body">
                                            <i class="bi bi-people"></i>
                                            <h5>Gestionar Usuarios</h5>
                                            <p>Administra administradores, profesores y estudiantes</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <a href="admin/carreras/gestionar.php" class="text-decoration-none">
                                    <div class="card card-quick bg-info text-white">
                                        <div class="card-body">
                                            <i class="bi bi-mortarboard"></i>
                                            <h5>Gestionar Carreras</h5>
                                            <p>Define planes de estudio y duración</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <a href="admin/ciclos/gestionar.php" class="text-decoration-none">
                                    <div class="card card-quick bg-primary text-white">
                                        <div class="card-body">
                                            <i class="bi bi-calendar-event"></i>
                                            <h5>Gestionar Ciclos</h5>
                                            <p>Organiza periodos académicos: 01-2025, 02-2025</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        <?php endif; ?>

                        <div class="col-md-6 col-lg-4">
                            <a href="admin/academico/asignaturas/gestionar.php" class="text-decoration-none">
                                <div class="card card-quick bg-warning text-dark">
                                    <div class="card-body">
                                        <i class="bi bi-book"></i>
                                        <h5>Gestionar Asignaturas</h5>
                                        <p>Crea y edita materias por carrera</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <a href="admin/academico/grupos/crear.php" class="text-decoration-none">
                                <div class="card card-quick bg-secondary text-white">
                                    <div class="card-body">
                                        <i class="bi bi-people-fill"></i>
                                        <h5>Gestionar Grupos</h5>
                                        <p>Asigna docentes, sedes y horarios</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <a href="admin/academico/matriculas/gestionar.php" class="text-decoration-none">
                                <div class="card card-quick bg-dark text-white">
                                    <div class="card-body">
                                        <i class="bi bi-pencil-square"></i>
                                        <h5>Gestionar Matrículas</h5>
                                        <p>Inscribe estudiantes en grupos</p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <!-- Cuadrito especial para Control Académico -->
                        <div class="col-md-12 col-lg-8 mt-4">
                            <a href="admin/academico/inicio.php" class="text-decoration-none">
                                <div class="card card-quick card-control text-white">
                                    <div class="card-body">
                                        <i class="bi bi-journal-check"></i>
                                        <h4><strong>🎯 Panel de Control Académico</strong></h4>
                                        <p style="opacity: 0.9;">Registra asistencias, tareas, exámenes y genera reportes oficiales</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                <?php else: ?>
                    <!-- Mensaje para roles no administrativos -->
                    <div class="text-center my-5">
                        <div class="alert alert-info">
                            <h5><i class="bi bi-info-circle"></i> Bienvenido al Sistema IBEC</h5>
                            <p>Estás autenticado como <strong><?= ucfirst(str_replace('_', ' ', $rol)) ?></strong>.</p>
                            <p>El panel principal está optimizado para administradores.</p>
                        </div>
                    </div>
                <?php endif; ?>

                <!-- Pie de página -->
                <div class="footer text-center mt-5">
                    <p>© 2025 Instituto Bíblico El Camino (IBEC) — Sistema de Gestión Académica</p>
                </div>
            </main>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
