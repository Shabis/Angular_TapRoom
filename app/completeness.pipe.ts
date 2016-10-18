import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name: "completeness",
  pure: true
})
export class CompletenessPipe implements PipeTransform {
  transform(input: Keg[], desiredCompleteness) {
    var output: Keg[] = [];
    if (desiredCompleteness === "notTapped") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].tapped === false) {
        output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCompleteness === "isTapped") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].tapped === true) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
