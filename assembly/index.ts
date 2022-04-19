import { Context } from "near-sdk-as";


/**
 * Edit helloWorld() function code such that it returns the word "hello world!"
 */
export function helloWorld(): string {
  return 'hello world!';
}

/**
 * Edit greeting() function such that it returns a string containing both name parameter and the wallet address calling this function
 * Hint: wallet address is found as follows: Context.sender
 * @param name
 * @returns
 */

function wallet(fn: (a: string) => string): void {
    fn('John');
}

 
export function greeting(name: string): string {
var wallet_address = Context.sender
var result = "Hello " + name + " " + wallet_address
return result
}

wallet(greeting)

