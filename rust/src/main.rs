mod no0001_two_sum;

fn main() {
    let args: Vec<String> = std::env::args().collect();

    if args.len() > 1 {
        let argument = &args[1];
        println!("Leetcode problem nubmer is {}", argument);

        if argument == "1" {
            no0001_two_sum::run();
        } else {
            println!("Unimplemented leetcode problem");
        }
    } else {
        println!("parameter not found");
    }
}
