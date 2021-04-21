<?php include 'db.php';?>
<!--php db connection link-->


<!doctype html>
<html>
	
<head>
	<meta charset="UTF-8">
	
	<title>PHP Chat System</title>
	
	<link href="style.css" rel="stylesheet" type="text/css">
    
    <script>
        function ajax(){
            
            var req = new XMLHttpRequest();
            
            req.onreadystatechange = function(){
                
                if (req.readyState == 4 && req.status == 200){
                    
                    document.getElementById('chat').innerHTML = req.responseText;
                    
                }
            }//end onreadystatechange function
            
            req.open('GET','chat.php',true);
            req.send('');
            
        }//end ajax update function
        
        
        setInterval(function(){ajax();},1000);
        
    </script>
	
</head>

<body onload="ajax();">
	<p>Date: <?php echo date('d-M-Y'); ?>.</p>
    <p>Time: <?php echo date('H:i:s')?></p>
	
	
	
	<div id="container">
    
        <div id="chat_box">
            
        <div id="chat"></div>
            
        <?php
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
            
            
        </div><!--div chat_box-->
        
        <form method="post" action="index.php">
        <input type="text" name="name" placeholder="Enter name" />
        <textarea name="msg" placeholder="Enter message"></textarea>
        <input type="submit" name="submit" value="Send" />
            
        </form><!--form-->
                
        <?php
        
        if(isset($_POST['submit'])){
            
            $name = $_POST['name'];
            $msg = $_POST['msg'];
            
            $query = "INSERT INTO chat_test (name,msg) values ('$name','$msg')";
            
            $run = $con->query($query);
            
            if($run){
                echo "<embed loop='false' src='chat.wav' hidden='true' autoplay='true' />";
            }
            
        }
        
        ?>
            
            
    
    </div><!-- div container-->
        
</body>
</html>