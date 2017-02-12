// sample of the quick union -- a solution i thought of while watching the princeton video (algorithms)

class quickUnion {
    private arr = [];

    construct (n) {
        for (var i = 0; i < n; i++) {
            this.arr[i] = {
                root : i
            };
        }
    }

    union (a, b) {
        this.arr[a].root
    }

}