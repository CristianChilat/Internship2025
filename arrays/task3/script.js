const styles = ['Jazz', 'Blues'];

console.log(styles);

styles.push('Rock-n-roll');

console.log(styles);

styles.splice(styles.length / 2, 1, 'Classical');

console.log(styles);

styles.shift();

console.log(styles);

styles.unshift('Rap', 'Reggae');

console.log(styles);