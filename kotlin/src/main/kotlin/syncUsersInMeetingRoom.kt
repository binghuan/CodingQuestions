fun main() {
    class Solution {
        fun handleEvents(eventWithArgs: List<List<String>>): Pair<List<String>, Int> {
            val membersInRoom = mutableMapOf<String, String>()

            for (event in eventWithArgs) {
                when (event[0]) {
                    "onUserInfoUpdated" -> {
                        val uid = event[1]
                        val displayName = event[2]
                        membersInRoom[uid] = displayName
                    }

                    "onUserJoined" -> {
                        val uid = event[1]
                        membersInRoom[uid] = uid
                    }

                    "onUserOffline" -> {
                        val uid = event[1]
                        membersInRoom.remove(uid)
                    }

                    "SyncViaHttpResponse" -> {
                        // Clear existing entries and add new ones.
                        membersInRoom.clear()
                        event.subList(1, event.size).forEach { user ->
                            membersInRoom[user] = user
                        }
                    }
                }
            }
            return Pair(
                membersInRoom.values.toList(), membersInRoom.values.size
            )
        }
    }

    val events = listOf(
        listOf("onUserInfoUpdated", "1001", "android2001"),
        listOf("onUserJoined", "1002"),
        listOf("onUserOffline", "1001"),
        //listOf("SyncViaHttpResponse", "android2001", "android2002"),
    )

    val solution = Solution()
    val (members, totalMembers) = solution.handleEvents(events)
    println("Members in room: $members")
    println("Total members: $totalMembers")
}

/*
    // This callback notifies the app when the user information of a remote user is updated.
    onUserInfoUpdated (uid: String, userAccount: String)

    // This callback notifies the app when another user joins the channel.
    onUserJoined (uid: String)

    // This callback notifies the app when a remote user leaves the channel or goes offline.
    onUserOffline (uid: String)

    // Force sync the user list via HTTP response.
    SyncViaHttpResponse(List<String>)

    // Please implement a function to handle incoming events and
    // print out the conference room members and the total number of members
    fun handleEvents(eventWithArgs: List<List<String>>): Pair<List<String>, Int>

 */

