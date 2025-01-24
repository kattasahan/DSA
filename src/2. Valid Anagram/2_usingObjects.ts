function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const freq: { [key: string]: number } = {};

  for (let i = 0; i < s.length; i++) {
    if (freq[s[i]]) {
      freq[s[i]]++;
    } else {
      freq[s[i]] = 1;
    }
    if (freq[t[i]]) {
      freq[t[i]]--;
    } else {
      freq[t[i]] = -1;
    }
  }

  return Object.values(freq).every((e) => e === 0);
}

isAnagram("anagram", "nagaram");
