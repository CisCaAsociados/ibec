<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Login - IBEC</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
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
            background-color: #003366;
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
        #mensaje {
            margin-bottom: 20px;
        }
    </style>
</head>
<body>

    <div class="login-container">
        <div class="logo-container">
            <img src="img/Logo_Ibec.png" alt="Logo IBEC">
        </div>
        <div class="brand-bar">
            SISTEMA IBEC
        </div>
        <div class="card shadow-sm">
            <div class="card-body">
                <h4 class="text-center mb-4"><i class="bi bi-lock"></i> Iniciar Sesión</h4>

                <!-- Aquí mostraremos mensajes de error o éxito -->
                <div id="mensaje"></div>

                <form id="loginForm">
                    <div class="mb-3">
                        <label class="form-label">Correo Electrónico</label>
                        <input type="email" id="email" class="form-control" placeholder="tucorreo@ibec.edu" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Contraseña</label>
                        <input type="password" id="password" class="form-control" required>
                    </div>
                    <button type="submit" class="btn btn-primary w-100">Iniciar Sesión</button>
                </form>

                <div class="text-center mt-3">
                    <small>¿No tienes cuenta? <a href="#" id="irRegistro">Regístrate</a></small>
                </div>
            </div>
        </div>
        <div class="footer-instituto">
            INSTITUTO BÍBLICO EL CAMINO
        </div>
    </div>

    <!-- Firebase SDK -->
    <script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-auth-compat.js"></script>

    <script>
        // Pega aquí tu configuración de Firebase (solo para pruebas locales o privadas)
 const firebaseConfig = {
  apiKey: "AIzaSyCV_UwzE7uPv67-3iR2Arv71fOL6fd1wdw",
  authDomain: "ibec-login.firebaseapp.com",
  projectId: "ibec-login",
  storageBucket: "ibec-login.firebasestorage.app",
  messagingSenderId: "616348709046",
  appId: "1:616348709046:web:07e77e7e2fba90a0b57617",
  measurementId: "G-0R13GPY97Z"
};

        // Inicializar Firebase
        const app = firebase.initializeApp(firebaseConfig);
        const auth = firebase.auth();

        // Manejar el formulario
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const mensajeDiv = document.getElementById('mensaje');

            auth.signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    // Login exitoso
                    mensajeDiv.innerHTML = '<div class="alert alert-success">¡Bienvenido! Redirigiendo...</div>';
                    setTimeout(() => {
                        window.location.href = "dashboard.html"; // Cambia esto por tu página principal
                    }, 1500);
                })
                .catch((error) => {
                    let msg = "Error técnico. Intenta nuevamente.";
                    if (error.code === 'auth/invalid-credential') {
                        msg = "Email o contraseña incorrectos.";
                    } else if (error.code === 'auth/missing-password' || error.code === 'auth/missing-email') {
                        msg = "Completa todos los campos.";
                    }
                    mensajeDiv.innerHTML = `<div class="alert alert-danger">${msg}</div>`;
                });
        });

        // Opcional: link para registro (si quieres crear usuarios)
        document.getElementById('irRegistro').addEventListener('click', function(e) {
            e.preventDefault();
            // Aquí podrías redirigir a register.html o abrir un modal
            alert("Función de registro aún no implementada.");
        });
    </script>

</body>
</html>
