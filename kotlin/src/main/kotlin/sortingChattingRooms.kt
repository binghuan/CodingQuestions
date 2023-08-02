// This is my original LeetCode question.
fun main() {

    class Solution() {
        fun sortingChattingRooms(
            chattingRooms: List<String>,
            scheduledRooms: List<String>,
            meetingRooms: List<String>
        ) {
            val instantRooms =
                meetingRooms.subtract(chattingRooms).sortedBy { it }
            val meetingInChattingRooms = chattingRooms.intersect(meetingRooms)
            val scheduled = scheduledRooms.subtract(meetingRooms)
            val others = chattingRooms.subtract(meetingInChattingRooms)
                .subtract(scheduled)

            println("--- Instant Call ---")
            for (room in instantRooms) {
                println("$room (mm:ss)")
            }
            println("--- Meeting Rooms ---")
            for (room in meetingInChattingRooms) {
                println("$room (mm:ss)")
            }
            println("--- Scheduled meetings ---")
            for (room in scheduled) {
                println("$room (join)")
            }
            println("--- Others ---")
            for (room in others) {
                println(room)
            }
        }
    }

    val meetingRooms = listOf("G01", "G03")
    val scheduledRooms = listOf("P01", "G01", "G03")
    val chattingRooms = listOf("P02", "G02", "P01", "G01")

    val solution = Solution()
    solution.sortingChattingRooms(chattingRooms, scheduledRooms, meetingRooms)
}

// NOTE: Meeting rooms you have not joined before. You have been invited for a short chat.
// After that, the meeting room will no longer exist in your records.

/* OUTPUT

--- Instant Call ---
G03 (mm:ss)
--- Meeting Rooms ---
G01 (mm:ss)
--- Scheduled meetings ---
P01 (join)
--- Others ---
P02
G01
G02

*/
