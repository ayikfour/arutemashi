import chalk from "chalk";
import moment from "moment";
const log = console.log;

export default function(context = "") {
   var context = context.toUpperCase();

   var logger = {
      error: function(message = "") {
         var time = moment()
            .format("h:mm:ss a")
            .toUpperCase();

         log(
            chalk.red(time),
            "-",
            chalk.magenta.bold(context),
            chalk.red("ERROR:"),
            message
         );
         return this;
      },
      success: function(message = "") {
         var time = moment()
            .format("h:mm:ss a")
            .toUpperCase();

         log(
            chalk.green(time),
            "-",
            chalk.magenta.bold(context),
            chalk.green("SUCCESS:"),
            message
         );
         return this;
      },
      header: function() {
         var time = moment()
            .format("h:mm:ss a")
            .toUpperCase();

         log(chalk.magenta(time), "-", chalk.magenta.bold(context));
         return this;
      },
      process: function(subcontext = "", message = "") {
         var time = moment()
            .format("h:mm:ss a")
            .toUpperCase();

         log(
            chalk.yellow(time),
            "-",
            chalk.magenta.bold(context),
            chalk.yellow(subcontext.toUpperCase() + ":"),
            message
         );
         return this;
      }
   };
   return logger;
}
