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
        document.getElementById("img1").src = "https://lh3.googleusercontent.com/d/13aorQ2zVDVov3fMmf4lOUr8oep40wlI8";
        document.getElementById("img2").src = "https://lh3.googleusercontent.com/d/13s94Yk2V6Qy3AT3wFF0RA1wY2RxpAIz2";
        document.getElementById("img3").src = "https://lh3.googleusercontent.com/d/12TqYiv-NBhnEzl2mnitJpuMm3ecYxOKJ";
        break;
      
        //Verifying if the Pixel Bud A-Series S/N entered is already a bundle S/N
        case "9":
        document.getElementById("myDevice").innerHTML = "Pixel Buds A-Series";
        document.getElementById("result").innerHTML = "The S/N entered is already a bundle S/N";
        document.getElementById("img1").src = "https://lh3.googleusercontent.com/d/13aorQ2zVDVov3fMmf4lOUr8oep40wlI8";
        document.getElementById("img2").src = "https://lh3.googleusercontent.com/d/13s94Yk2V6Qy3AT3wFF0RA1wY2RxpAIz2";
        document.getElementById("img3").src = "https://lh3.googleusercontent.com/d/12TqYiv-NBhnEzl2mnitJpuMm3ecYxOKJ";
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
            document.getElementById("img1").src = "https://lh3.googleusercontent.com/d/14E4YLMRsadtgpSAMVNbgE-Xn_Zop9pxR";
            document.getElementById("img2").src = "https://lh3.googleusercontent.com/d/143ae80isFLy_d5Dtd-ezjUWhPsJr-gK_";
            document.getElementById("img3").src = "https://lh3.googleusercontent.com/d/13tnLEGMNqkCl0TFaARje4dN3PVIsIXch";
            break;
            
            //Verifying if the Pixel Buds 2nd Gen S/N entered is from a single bud R or L
            case "G":
            document.getElementById("myDevice").innerHTML = "Pixel Buds 2nd Generation";
            document.getElementById("result").innerHTML = "This is a single bud S/N, please enter the case S/N"
            document.getElementById("img1").src = "https://lh3.googleusercontent.com/d/14E4YLMRsadtgpSAMVNbgE-Xn_Zop9pxR";
            document.getElementById("img2").src = "https://lh3.googleusercontent.com/d/143ae80isFLy_d5Dtd-ezjUWhPsJr-gK_";
            document.getElementById("img3").src = "https://lh3.googleusercontent.com/d/13tnLEGMNqkCl0TFaARje4dN3PVIsIXch";

            //Verifying if the Pixel Buds 2nd Gen S/N entered is already a bundle S/N
            case "W":
            document.getElementById("myDevice").innerHTML = "Pixel Buds 2nd Generation";
            document.getElementById("result").innerHTML = "The S/N entered is already a bundle S/N";
            document.getElementById("img1").src = "https://lh3.googleusercontent.com/d/14E4YLMRsadtgpSAMVNbgE-Xn_Zop9pxR";
            document.getElementById("img2").src = "https://lh3.googleusercontent.com/d/143ae80isFLy_d5Dtd-ezjUWhPsJr-gK_";
            document.getElementById("img3").src = "https://lh3.googleusercontent.com/d/13tnLEGMNqkCl0TFaARje4dN3PVIsIXch";
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
                document.getElementById("img1").src = "https://lh3.googleusercontent.com/d/13FANbyZp2HMJxKRSmyyJGDAlPqYECxad";
                document.getElementById("img2").src = "https://lh3.googleusercontent.com/d/13erKhQALjb-L8F0FUJe97J-nm_p4e028";
                document.getElementById("img3").src = "https://lh3.googleusercontent.com/d/13CqCI_3RC--ckVW5-7saoT_sZ4QAgbYe";            
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
                document.getElementById("img1").src = "https://lh3.googleusercontent.com/d/13FANbyZp2HMJxKRSmyyJGDAlPqYECxad";
                document.getElementById("img2").src = "https://lh3.googleusercontent.com/d/13erKhQALjb-L8F0FUJe97J-nm_p4e028";
                document.getElementById("img3").src = "https://lh3.googleusercontent.com/d/13CqCI_3RC--ckVW5-7saoT_sZ4QAgbYe";
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
            document.getElementById("img1").src = "https://lh3.googleusercontent.com/d/1330bw6hE4lxX9WO4QKkL7TymlE9Zaz8m";
            document.getElementById("img2").src = "https://lh3.googleusercontent.com/d/14Z7M_hPldpJv2pdq_Y4zZiwb3URMCSC4";
            document.getElementById("img3").src = "https://lh3.googleusercontent.com/d/14gUkNcOCRkeHhOGMoEDdEZm20WaJXX-A";
            break;

            case "D":
            document.getElementById("myDevice").innerHTML = "Chromecast with Google TV 4K";
            upperSN = upperSN.split("");
            upperSN[8] = "E";
            upperSN = upperSN.join("");
            document.getElementById("result").innerHTML = "The bundle S/N is: ";
            document.getElementById("bundle").innerHTML = upperSN;
            document.getElementById("img1").src = "https://lh3.googleusercontent.com/d/1330bw6hE4lxX9WO4QKkL7TymlE9Zaz8m";
            document.getElementById("img2").src = "https://lh3.googleusercontent.com/d/14Z7M_hPldpJv2pdq_Y4zZiwb3URMCSC4";
            document.getElementById("img3").src = "https://lh3.googleusercontent.com/d/14gUkNcOCRkeHhOGMoEDdEZm20WaJXX-A";
            break;

            default:
                document.getElementById("result").innerHTML = "The S/N entered was not found, please make sure it is correct or find a T2 for assistance."
                document.getElementById("myDevice").innerHTML = "Your Google device";
                document.getElementById("bundle").innerHTML = "";
        }
    }

        else{

            switch (upperSN.charAt(8)){

                case "H":
                document.getElementById("myDevice").innerHTML = "Chromecast with Google TV HD";
                document.getElementById("result").innerHTML = "The S/N entered is already a bundle S/N";
                document.getElementById("img1").src = "https://lh3.googleusercontent.com/d/1330bw6hE4lxX9WO4QKkL7TymlE9Zaz8m";
                document.getElementById("img2").src = "https://lh3.googleusercontent.com/d/14J1U1938rmdl7yI_J4VY0c_s55ZIAysa";
                document.getElementById("img3").src = "https://lh3.googleusercontent.com/d/14FJXdhKYN9EhTosUoAFRoywlOKILREe_";
                break;
  
                case "N":
                document.getElementById("myDevice").innerHTML = "Chromecast with Google TV HD";
                upperSN = upperSN.split("");
                upperSN[8] = "H";
                upperSN[9] = "4";
                upperSN = upperSN.join("");
                document.getElementById("result").innerHTML = "The bundle S/N is: ";
                document.getElementById("bundle").innerHTML = upperSN;
                document.getElementById("img1").src = "https://lh3.googleusercontent.com/d/1330bw6hE4lxX9WO4QKkL7TymlE9Zaz8m";
                document.getElementById("img2").src = "https://lh3.googleusercontent.com/d/14J1U1938rmdl7yI_J4VY0c_s55ZIAysa";
                document.getElementById("img3").src = "https://lh3.googleusercontent.com/d/14FJXdhKYN9EhTosUoAFRoywlOKILREe_";
                break;

                default:
                document.getElementById("result").innerHTML = "The S/N entered was not found, please make sure it is correct or find a T2 for assistance."
                document.getElementById("myDevice").innerHTML = "Your Google device";
                document.getElementById("bundle").innerHTML = "";
            }
            }         
    }
    }
