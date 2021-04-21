 <?php
    include 'db.php';

    $query = "SELECT * FROM chat_test ORDER BY id DESC";
    $run = $con->query($query);

    while($row = $run->fetch_assoc()){
 ?>
            <div id="chat_data">
                <span style="color:green;"><?php echo $row['name'];?></span>:
                <span style="color:brown;"><?php echo $row['msg'];?></span>
                <span style="float:right;"><?php echo formatDate($row['date']);?></span>
            </div><!--div chat_data-->
            <?php };?><!--end loop for chat data-->