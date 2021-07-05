function findMeetingSlots(schedules) {
  let times = schedules.flat()

  times.sort((a, b) => a[0] - b[0])

  let result = []

  let prevEnd = 0
  times.forEach(t => {
    let [start, end] = t
    if (prevEnd < start) {
      result.push([prevEnd, start])
    }

    prevEnd = Math.max(end, prevEnd)
  })

  if (prevEnd !== 24) {
    result.push([prevEnd, 24])
  }

  return result
}
