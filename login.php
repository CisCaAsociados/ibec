<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Login - IBEC</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            background-color: #f8f9fa;
            font-family: 'Arial', sans-serif;
        }
        .login-container {
            max-width: 450px;
            margin: 30px auto;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
        }
        .logo-container {
            text-align: center;
            padding: 20px 15px;
            background-color: #f8f9fa;
            border-bottom: 1px solid #e9ecef;
        }
        .logo-container img {
            max-width: 150px;
            height: auto;
        }
        .brand-bar {
            background-color: #003366; /* Azul oscuro, como el logo */
            color: white;
            text-align: center;
            padding: 12px 0;
            font-weight: bold;
            font-size: 1.2rem;
            letter-spacing: 1px;
        }
        .card-body {
            padding: 30px;
        }
        .footer-instituto {
            text-align: center;
            padding: 15px;
            color: #495057;
            font-weight: bold;
            font-size: 0.95rem;
            background-color: #f8f9fa;
            border-top: 1px solid #e9ecef;
        }
        .btn-primary {
            background-color: #003366;
            border: none;
        }
        .btn-primary:hover {
            background-color: #002244;
        }
    </style>
</head>
<body>
    <!-- Contenedor principal -->
    <div class="login-container">
        
        <!-- Logo -->
        <div class="logo-container">
            <img src="img/Logo_Ibec.png" alt="Logo IBEC">
        </div>

        <!-- Franja azul con texto -->
        <div class="brand-bar">
            SISTEMA IBEC
        </div>

        <!-- Tarjeta de login -->
        <div class="card shadow-sm">
            <div class="card-body">
                <h4 class="text-center mb-4"><i class="bi bi-lock"></i> Iniciar Sesión</h4>

                <!-- Mensajes de error -->
                <?php if (isset($_GET['error'])): ?>
                    <div class="alert alert-danger alert-sm mb-4">
                        <?php if ($_GET['error'] == 'vacios'): ?>
                            Completa todos los campos.
                        <?php elseif ($_GET['error'] == 'credenciales'): ?>
                            Email o contraseña incorrectos.
                        <?php else: ?>
                            Error técnico. Intenta nuevamente.
                        <?php endif; ?>
                    </div>
                <?php endif; ?>

                <!-- Formulario -->
                <form action="auth/login_proceso.php" method="POST">
                    <div class="mb-3">
                        <label class="form-label">Correo Electrónico</label>
                        <input type="email" name="email" class="form-control" placeholder="tucorreo@ibec.edu" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Contraseña</label>
                        <input type="password" name="password" class="form-control" required>
                    </div>
                    <button type="submit" class="btn btn-primary w-100">Iniciar Sesión</button>
                </form>
            </div>
        </div>

        <!-- Pie: Nombre del instituto -->
        <div class="footer-instituto">
            INSTITUTO BÍBLICO EL CAMINO
        </div>
    </div>

    <!-- Bootstrap JS (opcional) -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>