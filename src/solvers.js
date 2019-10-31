/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {

  var solution = []; //fixme

  var board = new Board ({'n': n });

  var usedColumns = [];

  var recurse = function(rowIndex) {
    for (var j = 0; j < n; j++) {
      if (!usedColumns.includes(j)) {

        var currentRow = board.get(rowIndex);

        currentRow[j] = 1;
        usedColumns.push(j);

        recurse(rowIndex + 1);

        if (board.hasAnyRooksConflicts()) {
          currentRow[j] = 0;
          usedColumns.filter(num => num !== j);
          continue;
        } else {
          solution.unshift(currentRow);
        }
      }
    }
  };

  recurse(0);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 1; //fixme

  var innerRecurse = function(factorial) {
    if (factorial > 0) {
      solutionCount *= factorial;
      innerRecurse(factorial - 1);
    }
  };

  innerRecurse(n);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme



  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
