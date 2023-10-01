# Multiplication Table Creator

## About the project

The Multiplication Table Creator is a simple command-line tool that generates multiplication tables based on user-defined arguments passed through the console.

## Usage

Before using the application, you need to install the necessary dependencies. Follow the instructions below to get started. Once the dependencies are installed, you can initialize the app with the following command:

### List of Available Arguments

- **`--help:`** Display the help information.
- **`--version:`** Display the current version of the application.
- **`--base=[number]:`** Specify the base number for multiplication.
- **`--limit=[number]:`** Set the limit for the list of numbers to be multiplied.
- **`--show=[boolean]:`** Determine whether to display and save the multiplication table to the file system.

**Example Usage:** `npm run dev --base=2 --limit=10`

If you do not include the `--show` argument, the program will execute internally without displaying or saving the generated table.

**Example Usage:** `npm run dev --base=2 --limit=10 --show`

With the execution of this command, it will generate the table in console and save the file with the name of the created table example **`base-[number].txt`**, the file will be saved in the following path **`/src/tables`**.

## Installation

To install the necessary dependencies, follow these steps:

1. Clone this repository to your local machine using `git clone`.
2. Navigate to the project directory using the command line.
3. Run the following command to install dependencies:

```bash
npm install
```

Once the installation is complete, you can start using the Multiplication Table Creator as described in the usage section above.

Enjoy creating multiplication tables effortlessly!
