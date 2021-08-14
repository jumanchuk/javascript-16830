    let entrada = prompt("Javascript Simple Calculator, Shoose an Option:\n\n0. Stop \n1. Addition \n2. Subtraction \n3. Multiplication \n4. Division \n\n");

    //While the choose number be >= 0 and <= 4
    while(entrada != 0){
        switch (entrada) {
            case "1":
                    //Addition
                    num1 = prompt("First Number:");
                    num2 = prompt("Second Number:");

                    rs = parseInt(num1) + parseInt(num2);

                    alert(rs)

                    break;
                case "2":
                    //Substration
                    num1 = prompt("First Number:");
                    num2 = prompt("Second Number:");

                    rs = parseInt(num1) - parseInt(num2);

                    alert(rs)

                    break;

                case "3":
                    //Multiplication
                    num1 = prompt("First Number:");
                    num2 = prompt("Second Number:");
    
                    rs = parseInt(num1) * parseInt(num2);
    
                    alert(rs)

                break;
                case "4":
                    //Division
                    num1 = prompt("First Number:");
                    num2 = prompt("Second Number:");
    
                    rs = parseInt(num1) / parseInt(num2);
    
                    alert(rs)

                break;
            default:
                alert("Please, choose a valid option.")

                break;
        }

        //Ask Again
        entrada = prompt("Javascript Simple Calculator:\n0. Stop \n1. Addition \n2. Subtraction \n3. Multiplication \n4. Division \n\nShoose an Option\n");
    }
