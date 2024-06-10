//Code to trigger function after pressing Enter
var input = document.getElementById("myText");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("SubmitBtn").click();
  }
});

function myFunction() {
  var x = document.getElementById("myText").value;
  
  //Initializing/resetting title and SN result
  document.getElementById("myDevice").innerHTML = "Your Google device";
  document.getElementById("bundle").innerHTML = "";

  if(x === ''){
    document.getElementById("myDevice").innerHTML = "Your Google device";
    document.getElementById("result").innerHTML = "Please enter a S/N";
  }
  else{
  
  //Changing S/N to uppercase
  var upperSN = x.toUpperCase();
 
  //Detecting if the S/N is 14 characters long
  if(x.length == 14){
  document.getElementById("result").innerHTML = "The bundle S/N is: ";
  document.getElementById("bundle").innerHTML = upperSN;
  }
  else{
  document.getElementById("result").innerHTML = "The S/N is incorrect, make sure it has 14 characters.";
  return;
  }
  }
  
  //Verifying if the S/N is from Pixel Buds
  var bud = upperSN.slice(4, 7);
  var cc = upperSN.slice(5,8);
  
  if(bud == "LZA"){
    
    //Verifying if Pixel Buds are A-Series
    if(upperSN.charAt(7)=="F"){
        switch (upperSN.charAt(8)){
        case "0":
        document.getElementById("myDevice").innerHTML = "Pixel Buds A-Series";
        upperSN = upperSN.split("");
        upperSN[8] = "9";
        upperSN[9] = "B";
        upperSN = upperSN.join("");
        document.getElementById("result").innerHTML = "The bundle S/N is: ";
        document.getElementById("bundle").innerHTML = upperSN;
        document.getElementById("img1").src = "https://vinxander44.github.io/g-sn-host/assets/buds-a-image-1.webp";
        document.getElementById("img2").src = "https://vinxander44.github.io/g-sn-host/assets/buds-a-olive-contacts.png";
        document.getElementById("img3").src = "https://vinxander44.github.io/g-sn-host/assets/buds-pro-buds-white.webp";
        break;
      
        //Verifying if the Pixel Bud A-Series S/N entered is already a bundle S/N
        case "9":
        document.getElementById("myDevice").innerHTML = "Pixel Buds A-Series";
        document.getElementById("result").innerHTML = "The S/N entered is already a bundle S/N";
        document.getElementById("img1").src = "https://vinxander44.github.io/g-sn-host/assets/buds-a-image-1.webp";
        document.getElementById("img2").src = "https://vinxander44.github.io/g-sn-host/assets/buds-a-olive-contacts.png";
        document.getElementById("img3").src = "https://vinxander44.github.io/g-sn-host/assets/buds-pro-buds-white.webp";
        break;

        default:
        document.getElementById("result").innerHTML = "The S/N entered was not found, please make sure it is correct or find a T2 for assistance."
        document.getElementById("myDevice").innerHTML = "Your Google device";
        document.getElementById("bundle").innerHTML = "";
    }
    }
    
    else {
        //Verifying if the Pixel Buds are Second Generation
        if(upperSN.charAt(7)=="B"){
            switch (upperSN.charAt(8)){
            case "H":
            document.getElementById("myDevice").innerHTML = "Pixel Buds 2nd Generation";
            upperSN = upperSN.split("");
            upperSN[7] = "W";
            upperSN[8] = "B";
            upperSN = upperSN.join("");
            document.getElementById("result").innerHTML = "The bundle S/N is: ";
            document.getElementById("bundle").innerHTML = upperSN;
            document.getElementById("img1").src = "https://vinxander44.github.io/g-sn-host/assets/buds-2-main2.jpg";
            document.getElementById("img2").src = "https://vinxander44.github.io/g-sn-host/assets/buds-2-white-black.png";
            document.getElementById("img3").src = "https://vinxander44.github.io/g-sn-host/assets/buds-2-white-transparent.png";
            break;
            
            //Verifying if the Pixel Buds 2nd Gen S/N entered is from a single bud R or L
            case "G":
            document.getElementById("myDevice").innerHTML = "Pixel Buds 2nd Generation";
            document.getElementById("result").innerHTML = "This is a single bud S/N, please enter the case S/N"
            document.getElementById("img1").src = "https://vinxander44.github.io/g-sn-host/assets/buds-2-main2.jpg";
            document.getElementById("img2").src = "https://vinxander44.github.io/g-sn-host/assets/buds-2-white-black.png";
            document.getElementById("img3").src = "https://vinxander44.github.io/g-sn-host/assets/buds-2-white-transparent.png";

            //Verifying if the Pixel Buds 2nd Gen S/N entered is already a bundle S/N
            case "W":
            document.getElementById("myDevice").innerHTML = "Pixel Buds 2nd Generation";
            document.getElementById("result").innerHTML = "The S/N entered is already a bundle S/N";
            document.getElementById("img1").src = "https://vinxander44.github.io/g-sn-host/assets/buds-2-main2.jpg";
            document.getElementById("img2").src = "https://vinxander44.github.io/g-sn-host/assets/buds-2-white-black.png";
            document.getElementById("img3").src = "https://vinxander44.github.io/g-sn-host/assets/buds-2-white-transparent.png";
            break;

            default:
            document.getElementById("result").innerHTML = "The S/N entered was not found, please make sure it is correct or find a T2 for assistance."
            document.getElementById("myDevice").innerHTML = "Your Google device";
            document.getElementById("bundle").innerHTML = "";
            }
        }

        else{
            //Verifying if the Pixel Buds are Pro
            switch (upperSN.charAt(8)){
            
                //Verifying if the Pixel Buds Pro S/N entered is already a bundle S/N
                case "D":
                document.getElementById("myDevice").innerHTML = "Pixel Buds Pro";
                document.getElementById("result").innerHTML = "The S/N entered is already a bundle S/N";
                document.getElementById("img1").src = "https://vinxander44.github.io/g-sn-host/assets/buds-pro-image-1.webp";
                document.getElementById("img2").src = "https://vinxander44.github.io/g-sn-host/assets/buds-pro-blue-pair.webp";
                document.getElementById("img3").src = "https://vinxander44.github.io/g-sn-host/assets/buds-pro-lemon-transparent.png";            
                break;
                
                case "G":
                document.getElementById("myDevice").innerHTML = "Pixel Buds Pro";
                upperSN = upperSN.split("");
                upperSN[7] = "G";
                upperSN[8] = "D";
                upperSN[9] = "B";
                upperSN = upperSN.join("");
                document.getElementById("result").innerHTML = "The bundle S/N is: ";
                document.getElementById("bundle").innerHTML = upperSN;
                document.getElementById("img1").src = "https://vinxander44.github.io/g-sn-host/assets/buds-pro-image-1.webp";
                document.getElementById("img2").src = "https://vinxander44.github.io/g-sn-host/assets/buds-pro-blue-pair.webp";
                document.getElementById("img3").src = "https://vinxander44.github.io/g-sn-host/assets/buds-pro-lemon-transparent.png"; 
                break;

            default:
            document.getElementById("result").innerHTML = "The S/N entered was not found, please make sure it is correct or find a T2 for assistance."
            document.getElementById("myDevice").innerHTML = "Your Google device";
            document.getElementById("bundle").innerHTML = "";
            
        }

    }
    }
  }
  else{         
    if(cc == "HFD"){ //Verifying if device is Chromecast with Google TV 4K
      
        switch (upperSN.charAt(8)){

            case "E": //Verifying if the S/N entered is already a bundle S/N
            document.getElementById("myDevice").innerHTML = "Chromecast with Google TV 4K";
            document.getElementById("result").innerHTML = "The S/N entered is already a bundle S/N";
            document.getElementById("img1").src = "https://vinxander44.github.io/g-sn-host/assets/cc4k-white.webp";
            document.getElementById("img2").src = "https://vinxander44.github.io/g-sn-host/assets/cc-4k-image3.webp";
            document.getElementById("img3").src = "https://vinxander44.github.io/g-sn-host/assets/cc-4k-coral-image2.jpg";
            break;

            case "D":
            document.getElementById("myDevice").innerHTML = "Chromecast with Google TV 4K";
            upperSN = upperSN.split("");
            upperSN[8] = "E";
            upperSN = upperSN.join("");
            document.getElementById("result").innerHTML = "The bundle S/N is: ";
            document.getElementById("bundle").innerHTML = upperSN;
            document.getElementById("img1").src = "https://vinxander44.github.io/g-sn-host/assets/cc4k-white.webp";
            document.getElementById("img2").src = "https://vinxander44.github.io/g-sn-host/assets/cc-4k-image3.webp";
            document.getElementById("img3").src = "https://vinxander44.github.io/g-sn-host/assets/cc-4k-coral-image2.jpg";
            break;

            default:
                document.getElementById("result").innerHTML = "The S/N entered was not found, please make sure it is correct or find a T2 for assistance."
                document.getElementById("myDevice").innerHTML = "Your Google device";
                document.getElementById("bundle").innerHTML = "";
        }
    }
        else{

            switch (upperSN.charAt(7)){

                case "H":
                document.getElementById("myDevice").innerHTML = "Chromecast with Google TV HD";
                document.getElementById("result").innerHTML = "The S/N entered is already a bundle S/N";
                document.getElementById("img1").src = "https://vinxander44.github.io/g-sn-host/assets/cc4k-white.webp";
                document.getElementById("img2").src = "https://vinxander44.github.io/g-sn-host/assets/cc-hd-white-photo.webp";
                document.getElementById("img3").src = "https://vinxander44.github.io/g-sn-host/assets/cc-controller.webp";
                break;
  
                case "N":
                document.getElementById("myDevice").innerHTML = "Chromecast with Google TV HD";
                upperSN = upperSN.split("");
                upperSN[7] = "H";
                upperSN[8] = "4";
                upperSN = upperSN.join("");
                document.getElementById("result").innerHTML = "The bundle S/N is: ";
                document.getElementById("bundle").innerHTML = upperSN;
                document.getElementById("img1").src = "https://vinxander44.github.io/g-sn-host/assets/cc4k-white.webp";
                document.getElementById("img2").src = "https://vinxander44.github.io/g-sn-host/assets/cc-hd-white-photo.webp";
                document.getElementById("img3").src = "https://vinxander44.github.io/g-sn-host/assets/cc-controller.webp";
                break;

                default:
                document.getElementById("result").innerHTML = "The S/N entered was not found, please make sure it is correct or find a T2 for assistance."
                document.getElementById("myDevice").innerHTML = "Your Google device";
                document.getElementById("bundle").innerHTML = "";
            }
            }         
    }
    }
