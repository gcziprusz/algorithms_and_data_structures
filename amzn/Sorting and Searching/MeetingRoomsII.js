//  Chronological Ordering Approach
function minMeetingRooms(intervals) {

    // Check for the base case. If there are no intervals, return 0
    if (intervals.length == 0) {
      return 0;
    }

    var start = new Array(intervals.length);
    var end = new Array(intervals.length);

    for (var i = 0; i < intervals.length; i++) {
      start[i] = intervals[i][0];
      end[i] = intervals[i][1];
    }

    // Sort the intervals by end time
    end
      .sort((a, b) => a - b);
  
    // Sort the intervals by start time
    start
      .sort((a, b) => a - b);

    // The two pointers in the algorithm: e_ptr and s_ptr.
    var startPointer = 0, endPointer = 0;

    // Variables to keep track of maximum number of rooms used.
    var usedRooms = 0;

    // Iterate over intervals.
    while (startPointer < intervals.length) {

      // If there is a meeting that has ended by the time the meeting at `start_pointer` starts
      if (start[startPointer] >= end[endPointer]) {
        usedRooms -= 1;
        endPointer += 1;
      }

      // We do this irrespective of whether a room frees up or not.
      // If a room got free, then this used_rooms += 1 wouldn't have any effect. used_rooms would
      // remain the same in that case. If no room was free, then this would increase used_rooms
      usedRooms += 1;
      startPointer += 1;

    }

    return usedRooms;
  }
