# Firebase Data Access Error: Property Access Before Snapshot Population

This repository demonstrates a common error encountered when working with Firebase: attempting to access document snapshot properties before the snapshot has fully populated. This often arises due to asynchronous operations, where data access occurs before the promise resolves.

The `bug.js` file showcases the error, while `bugSolution.js` provides a corrected approach that ensures data is accessed after the promise resolves.

## Reproduction

1. Clone this repository.
2. Set up a Firebase project.
3. Configure the Firebase SDK in the JavaScript file.
4. Run `bug.js`. You will observe an error.  Run `bugSolution.js` to see the corrected version.

## Solution

The solution involves ensuring that all data accesses occur within the `.then()` block of the promise, guaranteeing that the snapshot is fully populated before any property access attempts.