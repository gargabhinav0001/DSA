let heap = [4, 10, 3, 57, 89, 53, 45, 675, 32, 34, 568, 9, 1];

function getParentIdx(curr) {
    return Math.floor((curr - 1) / 2);
}

function getLeftChild(curr) {
    return 2 * curr + 1;
}

function getRightChild(curr) {
    return 2 * curr + 2;
}


function heapifyDown(curr, range = heap.length) {
    while (curr < range) {
        let leftIdx = getLeftChild(curr);
        let rightIdx = getRightChild(curr);
        let greatIdx = curr;

        if (leftIdx < range && heap[leftIdx] > heap[greatIdx]) {
            greatIdx = leftIdx;
        }

        if (rightIdx < range && heap[rightIdx] > heap[greatIdx]) {
            greatIdx = rightIdx;
        }

        if (greatIdx !== curr) {
            [heap[greatIdx], heap[curr]] = [heap[curr], heap[greatIdx]];
            curr = greatIdx;
        } else {
            break;
        }
    }
    return heap;
}

function heapSort() {

    let len = heap.length;
    for (let i = Math.floor(len / 2) - 1; i >= 0; --i) {
        heapifyDown(i);
    }

    let range = heap.length - 1;
    while (range > 0) {
        [heap[range], heap[0]] = [heap[0], heap[range]];
        heapifyDown(0, range);
        --range;
    }
}

heapSort();
