describe("[[R7Storage]]", function() {
  describe("[Getting Values]", function() {
    beforeEach(function(){
      R7Storage.setItem("name", "Guilherme");
      R7Storage.setItem("anumber", 123);
      R7Storage.setItem("aboolean", false);
      R7Storage.setItem(123, "onetwothree");
    });

    it("Should return properly the string value", function() {
      expect(R7Storage.get("name")).toBe("Guilherme");
    });

    it("Should return properly the number value", function() {
      expect(JSON.parse(R7Storage.get("anumber"))).toBe(123);
    });

    it("Should return properly the boolean value", function() {
      expect(JSON.parse(R7Storage.get("aboolean"))).toBeFalsy();
    });

    it("Should return properly the boolean value", function() {
      expect(R7Storage.get(123)).toBe("onetwothree");
    });

    it("Should return false, because the key was not saved before", function() {
      expect(R7Storage.get("arandomkey")).toBeFalsy();
    });

    it("Getting a data without a key - return error", function() {
      expect(function(){
        R7Storage.get()
      }).toThrow();
    });
  });
});
