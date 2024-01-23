export function getMoves(startRow, startCol) {
   
    const bishopMoves = [];
    bishopMoves.push([startRow, startCol]);
    for (let i = 1; i <= 8; i++) {
        // Diagonal moves in all four directions
        bishopMoves.push([startRow + i, startCol + i]);
        bishopMoves.push([startRow + i, startCol - i]);
        bishopMoves.push([startRow - i, startCol + i]);
        bishopMoves.push([startRow - i, startCol - i]);
    }

    // Filter out invalid positions (outside the chessboard)
    return ( bishopMoves.filter(([row, col]) => row > 0 && col > 0 && row <= 8 && col <= 8));
}