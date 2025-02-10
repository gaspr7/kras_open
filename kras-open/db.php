<?php
// Povezava z bazo
$host = 'localhost';
$username = 'root';
$password = '';
$database = 'kras';

$conn = mysqli_connect($host, $username, $password, $database);

// Preveri, ali je povezava uspela
if (!$conn) {
    die("Povezava z bazo ni uspela: " . mysqli_connect_error());
}

// SQL poizvedba za pridobivanje podatkov o tekmah z imeni ekip in skupinami
$sql = "SELECT t1.team_name AS team1_name, t2.team_name AS team2_name, tg.group_name
        FROM teams t1
        JOIN teams t2 ON t1.group_id = t2.group_id AND t1.team_id < t2.team_id
        JOIN team_groups tg ON t1.group_id = tg.group_id";
$result = mysqli_query($conn, $sql);

// Zapri povezavo z bazo
mysqli_close($conn);
?>

<form id="resultForm" method="POST" action="">
    <table class="table table-bordered table-striped" style="max-width: 600px;">
        <thead>
            <tr>
                <th>Ura</th>
                <th>Igrišče</th>
                <th class="text-center">Ekipa 1</th>
                <th class="text-center">Rezultat</th>
                <th class="text-center">Ekipa 2</th>
            </tr>
        </thead>
        <tbody>
            <?php if ($result->num_rows > 0): ?>
                <?php 
                // Prikaži vsako tekmo v novi vrstici
                while($row = $result->fetch_assoc()): 
                ?>
                <tr>
                    <td>10.00</td> <!-- Tukaj lahko prilagodiš, da bo ura dinamična -->
                    <td class="text-center"><?= htmlspecialchars($row['group_name']); ?></td> <!-- Ime skupine (igrišče) -->
                    <td class="text-center"><?= htmlspecialchars($row['team1_name']); ?></td> <!-- Ekipa 1 -->
                    <td class="text-center">
                        <input type="number" name="result_team1[<?= $row['team1_name']; ?>]" min="0" placeholder="Ekipa 1">
                        <input type="number" name="result_team2[<?= $row['team2_name']; ?>]" min="0" placeholder="Ekipa 2">
                    </td> <!-- Rezultat -->
                    <td class="text-center"><?= htmlspecialchars($row['team2_name']); ?></td> <!-- Ekipa 2 -->
                </tr>
                <?php endwhile; ?>
            <?php else: ?>
                <tr>
                    <td colspan="5">Ni podatkov o tekmah</td>
                </tr>
            <?php endif; ?>
        </tbody>
    </table>
    <button type="submit">Shrani rezultate</button>
</form>
