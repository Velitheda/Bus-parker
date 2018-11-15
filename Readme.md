# Bus Parking simulator

This is a very simple command line application that simulates a bus in a carpark written using Node and JavaScript.

The carpark is square and is 5 units wide and long. The bus takes up one unit and can move freely around in the carpark.

It takes in a text file called `commands.txt` that is some combination of these commands:

`PLACE X,Y,F`

X and Y are coordinates to place the bus between (0,0) and (4,4). F is the compass direction the bus is facing, ie "NORTH", "SOUTH", "EAST" or "WEST".

(0,0) is the southwest corner of the carpark.

`MOVE`

The bus will move forward one unit in the carpark, unless it is at the edge of the carpark where it will ignore the command.

`LEFT`

The bus will turn the compass direction left of the direction it is currently facing. For example, if it is facing north, it will turn and face west.

`RIGHT`

The bus will turn the compass direction left of the direction it is currently facing. For example, if it is facing north, it will turn and face east.

`REPORT`

This command will print to the console the coordinates and current direction the bus is facing, eg `0,0,NORTH`

A sample `commands.txt` file is provided.

### Running the application.

Make sure you have node and npm installed on your computer.

Download the repository and then run `npm install` to download all the node modules.

Type `chmod +x main.js` to make the main file executable.

Then run `Bus-parker` inside the directory to run the application.

If you wish to be able to run and install the application globally, type
```
  sudo npm link
  sudo npm i -g
```

To run the tests type `npm run test`
