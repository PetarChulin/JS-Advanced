function solve(worker) {
    
    worker.dizziness ? worker.levelOfHydrated += 0.1 * worker.weight * worker.experience : null;
    worker.dizziness ?  worker.dizziness = false : null;
    return worker;
}
solve({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  );