function mergeSort(arr, start = 0, end = arr.length - 1, buffer) {
  if(end <= start) {
    return arr
  }

  if(buffer === undefined) {
    buffer = [...arr]
  }

  const mid = Math.floor((start + end) / 2);

  mergeSort(arr, start, mid, buffer);
  mergeSort(arr, mid + 1, end, buffer);
  merge(arr, buffer, start, mid, end);

  return arr;
}


function merge(arr, buffer, start, mid, end) {
	// см. 6.1
	for (let i = start; i < end + 1; i++) {
		buffer[i] = arr[i]
	}

	// см. 6.2
	let l = start
	let r = mid + 1
	let i = start

	// см. 6.3
	while (l < mid + 1 && r < end + 1) {
		if (buffer[l] <= buffer[r]) {
			arr[i] = buffer[l]
			l++
		} else {
			arr[i] = buffer[r]
			r++
		}
		i++
	}

	// см. 6.4
	while (l < mid + 1) {
		arr[i] = buffer[l]
		l++
		i++
	}

	// см. 6.5
	while (r < end + 1) {
		arr[i] = buffer[r]
		r++
		i++
	}
}
