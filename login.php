<?php
session_start();

// Utilisateurs fictifs (Remplace par une base de données)
$users = [
    "admin" => "password123",
    "user" => "userpass"
];

// Vérifie si le formulaire a été soumis
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = $_POST["username"] ?? "";
    $password = $_POST["password"] ?? "";

    // Vérifie si l'utilisateur existe et si le mot de passe est correct
    if (isset($users[$username]) && $users[$username] === $password) {
        $_SESSION["username"] = $username;
        header("Location: dashboard.php"); // Redirige après connexion réussie
        exit();
    } else {
        $error = "Invalid username or password";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/assets/css/login.css">
    <title>Login | CMK</title>
</head>
<body>
    <main>
        <h1>Login</h1>
        <center>
            <form action="login.php" method="POST">
                <input type="text" name="username" placeholder="Username" required><br>
                <input type="password" name="password" placeholder="Password" required><br>
                <button type="submit">Login</button>
            </form>
            <?php if (!empty($error)): ?>
                <p style="color: red;"><?php echo htmlspecialchars($error); ?></p>
            <?php endif; ?>
        </center>
    </main>
</body>
</html>
