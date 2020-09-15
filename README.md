# Codeuino-Task

# What's done

Requirement 1 (R1): There should be one endpoint to generate keys. -> ✅ **Completed** ✅

Requirement 2 (R2): There should be an endpoint to get an available key. On hitting this endpoint server should serve a random key that is not already being used. This key should be blocked and should not be served again by R2 until it is in this state. If no eligible key is available then it should serve 404. -> ✅ **Completed** ✅

Requirement 3 (R3): There should be an endpoint to unblock a key. Unblocked keys can be served via R2 again. -> ✅ **Completed** ✅

Requirement 4 (R4): There should be an endpoint to delete a key. Deleted keys should be purged. -> ✅ **Completed** ✅

Requirement 5 (R5): All keys are to be kept alive by clients calling this endpoint every 5 minutes. If a particular key has not received a keep alive in the last five minutes then it should be deleted and never used again. -> ✅ **Completed** ✅

Rule 1: All blocked keys should get released automatically within 60 secs if E3 is not called. -> ✅ **Completed** ✅

Rule 2: No endpoint call should result in an iteration of a whole set of keys i.e. no endpoint request should be O(n). They should either be O(lg n) or O(1). -> ✅ **Completed** ✅

Make a private github repo and submit your code as a pull request. There should be 1 pull request  for set A or Set B. -> ✅ **Completed** ✅

Mention in readme what have you done and what part is remaining. -> ✅ **Completed** ✅

# What's left

Write Test Cases for your code. Use OOPS, Threading, etc whatever fits best for the better approach. -> ❌ **Not Done** ❌

# Ideas for Donut Project

I had this idea in mind about creating a platform which can help us find a team for hackathons. Since, Donut is a Social networking hub, I think this idea fits perfectly with it. Donut can match people on basis of their skills and help new people connect. 
