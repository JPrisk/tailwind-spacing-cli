export default async function lookup(arg) {
  const spacing = [1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64];
  let goal = arg / 4;

  let output = spacing.reduce((prev, curr) =>
    Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev
  );

  console.log(output);
}
