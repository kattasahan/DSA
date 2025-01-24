function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const freq = Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    freq[s.charCodeAt(i) - 97]++;
    freq[t.charCodeAt(i) - 97]--;
  }

  return freq.every((e) => e === 0);
}

isAnagram("anagram", "nagaram");
