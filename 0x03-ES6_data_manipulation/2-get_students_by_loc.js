export default function getStudentsByLocation(arr) {
  if (Array.isArray(arr)) {
    return arr.filter((student) => student.location === 'San Francisco');
  }
  return [];
}
