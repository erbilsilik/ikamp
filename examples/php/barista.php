<?php

class Barista {
        
        function makeMeCoffee($coffeeMachine,$cup)
        {
            return $coffeeMachine->fill($cup);
        }

    }

    class CoffeeMachine {

        function fill($cup)
        {
            $cup->setAmount(rand(1,100));
            return $cup;
        }

    }

    class Cup {
        
        protected $amount = 0;

        public function getCoffee()
        {
            return $this->setAmount();
        }

        public function setAmount($amount)
        {
            $this->$amount = $amount;
        }

    }


    $barista = new Barista();
    $coffeeMachine = new CoffeeMachine();
    $cup = new Cup();

    $filledCup = $barista->makeMeCoffee($coffeeMachine, $cup);

    var_dump($filledCup);

    ?>