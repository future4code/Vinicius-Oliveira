const printUntil = (n: number) => {
   for (let i = 0; i < n; i++) {
      console.log({ i })
   }
}

// timer().init
printUntil(10000)
// const elapsed = timer().end